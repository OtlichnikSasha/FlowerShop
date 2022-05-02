const {Product} = require("../models/index")
const {Photo, User, FavoriteProduct, BasketProduct} = require("../models");

class ProductsController {
    async getProducts(req, res) {
        try {
            const {categoryId, subcategoryId, limit, offset} = req.query
            let products;
            if (subcategoryId === "all") {
                products = await Product.findAll(
                    {
                        where: {categoryId},
                        offset, limit,
                        include: [
                            {model: Photo, as: 'photos', attributes: ['src']},
                            {model: FavoriteProduct, attributes: ['productId']},
                            {model: BasketProduct}
                        ],
                        order: [
                            ['id', 'DESC']
                        ]
                    }
                )

            } else {
                products = await Product.findAll({
                    where: {categoryId, subcategoryId},
                    offset, limit,
                    include: [
                        {model: Photo, as: 'photos', attributes: ['src']},
                        {model: FavoriteProduct, attributes: ['productId']},
                        {model: BasketProduct}
                    ],
                    order: [
                        ['id', 'DESC']
                    ]
                })
            }
            return res.json(products)
        } catch (e) {
            return res.status(500).json({message: e.message})
        }
    }

    async getSortingProducts(req, res) {
        try {
            const {categoryId, subcategoryId, limit, offset, sortedType, cost_start, cost_end} = req.query
            console.log('getSortingProducts', categoryId, subcategoryId, limit, offset, sortedType, cost_start, cost_end)
            let products;
            if (subcategoryId === "all") {
                switch (sortedType) {
                    case "1":
                        products = await Product.findAll(
                            {
                                where: {categoryId},
                                offset, limit,
                                include: [
                                    {model: Photo, as: 'photos', attributes: ['src']},
                                    {model: FavoriteProduct, attributes: ['productId']},
                                    {model: BasketProduct}
                                ],
                                order: [
                                    ['id', 'DESC']
                                ]
                            }
                        )
                        return res.json(products)
                    case "2":
                        products = await Product.findAll(
                            {
                                where: {categoryId},
                                offset, limit,
                                include: [
                                    {model: Photo, as: 'photos', attributes: ['src']},
                                    {model: FavoriteProduct, attributes: ['productId']},
                                    {model: BasketProduct}
                                ],
                                order: [
                                    ['cellPrice', 'DESC']
                                ]
                            }
                        )
                        return res.json(products)
                    case "3":
                        products = await Product.findAll(
                            {
                                where: {categoryId},
                                offset, limit,
                                include: [
                                    {model: Photo, as: 'photos', attributes: ['src']},
                                    {model: FavoriteProduct, attributes: ['productId']},
                                    {model: BasketProduct}
                                ],
                                order: [
                                    ['cellPrice']
                                ]
                            }
                        )
                        return res.json(products)
                    case "4":
                        products = await Product.findAll(
                            {
                                where: {categoryId},
                                offset, limit,
                                include: [
                                    {model: Photo, as: 'photos', attributes: ['src']},
                                    {model: FavoriteProduct, attributes: ['productId']},
                                    {model: BasketProduct}
                                ],
                                order: [
                                    ['views', 'DESC']
                                ]
                            }
                        )
                        return res.json(products)
                }
            }
        } catch (e) {
            return res.status(500).json({message: e.message})
        }
    }


    async getProductsData(req, res) {
        try{
            let {categoryId, subcategoryId, limit} = req.query
            let totalCount;
            let max_price;
            let min_price;
            let pages;
            if (subcategoryId === "all") {
                totalCount = await Product.count(
                    {
                        where: {categoryId}
                    })
                if (totalCount > limit) pages = 1
                else pages = Math.ceil(totalCount / limit)
                max_price = Product.findAll(
                    {
                        where: {categoryId},
                        limit: 1,
                        order: [
                            ['cellPrice', 'ASC']
                        ]
                    })
                min_price = Product.findAll(
                    {
                        where: {categoryId},
                        limit: 1,
                        order: [
                            ['cellPrice', 'DESC']
                        ]
                    })
            } else {
                totalCount = await Product.count(
                    {where: {categoryId, subcategoryId}}
                )
                if (totalCount > limit) pages = 1
                else pages = Math.ceil(totalCount / limit)
                max_price = Product.findOne(
                    {
                        where: {categoryId, subcategoryId},
                        limit: 1,
                        order: [
                            ['cellPrice']
                        ]
                    })
                min_price = Product.findOne(
                    {
                        where: {categoryId, subcategoryId},
                        limit: 1,
                        order: [
                            ['cellPrice', 'DESC']
                        ]
                    })
            }
            return res.json({"max_price": max_price, "min_price": min_price, "pages": pages})
        }
        catch(e){
            return res.status(500).json({message: e.message})
        }
    }

    async getFavoriteProducts (req, res) {
        const {userId} = req.query
        try{
            console.log('userId', userId)
            const user = await User.findOne({
                where: {id: userId}
            })
            if (!user) {
                return res.status(400).json({
                    message: 'Нет такого пользователя',
                })
            }
            const favoriteProducts = await FavoriteProduct.findAll({
                where: {userId},
                attributes: ['productId'],
            })
            console.log('favoriteProducts', favoriteProducts.toString())
            let productIds = []
            for(let i = 0; i < favoriteProducts.length; i++){
                productIds.push(favoriteProducts[i].productId)
            }
            const products = await Product.findAll({
                where: {id:  productIds},
                include: [
                    {model: Photo, as: 'photos', attributes: ['src']},
                    {model: FavoriteProduct, attributes: ['productId']}
                ],
            })
            return res.json(products)
        }
        catch(e){
            return res.status(500).json({message: e.message})
        }
}

}

module.exports = new ProductsController()
