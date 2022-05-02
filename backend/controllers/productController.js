const {Product, User, FavoriteProduct} = require("../models/index")

class ProductController {
    async createProduct(req, res) {
        try {
            const {name, categoryId, subCategoryId, price, cellPrice, description, cellPercent} = req.body
            const product = await Product.create({
                name,
                categoryId,
                subCategoryId,
                price,
                cellPrice,
                description,
                cellPercent
            })
            return res.json(product)
        } catch (e) {
            return res.status(500).json({message: e.message})
        }
    }


    async getProduct(req, res) {
        const {id} = req.query
        try {
            const product = await Product.findOne(
                {
                    where: {id},
                    include: [
                        {all: true},
                    ],
                }
            )
            const views = product.views + 1
            await product.update({views}, {where: {id: product.id}})
            return res.json(product)
        } catch (e) {
            return res.status(500).json({message: e.message})
        }
    }


    async addFavorite(req, res) {
        const {productId, userId} = req.body
        try {
            let product;
            let user;
            if (!userId) { // Если пользователь не зарегистрирован,
                user = await User.create({})
                product = await Product.findOne(
                    {where: {id: productId}}
                )
                if (!product) {
                    return res.status(400).json({
                        message: 'Не найдено такого товара',
                    })
                }
                await FavoriteProduct.create({productId, userId: user.id})
            }else {
                user = await User.findOne({
                    where: {id: userId},
                    attributes: ['id']
                })
                if (!user) {
                    return res.status(400).json({
                        message: 'Нет такого пользователя',
                    })
                }
                product = await Product.findOne(
                    {where: {id: productId}}
                )
                if (!product) {
                    return res.status(400).json({
                        message: 'Не найдено такого товара',
                    })
                }
                await FavoriteProduct.create({productId, userId})
            }
            return res.status(200).send({product, user})

        } catch (e) {
            return res.status(500).json({message: e.message})
        }
    }

    async removeFavorite(req, res) {
        const {productId, userId} = req.query
        try {
            const user = await User.findOne({
                where: {id: userId}
            })
            if (!user) {
                return res.status(400).json({
                    message: 'Нет такого пользователя',
                })
            }
            const product = await Product.findOne(
                {where: {id: productId}}
            )
            if (!product) {
                return res.status(400).json({
                    message: 'Не найдено такого товара',
                })
            }
            const favoriteProduct = await FavoriteProduct.findOne({where: {productId, userId}})
            if (favoriteProduct) {
                await favoriteProduct.destroy()
                return res.json(product)
            }
        } catch (e) {
            return res.status(500).json({message: e.message})
        }
    }
}

module.exports = new ProductController()
