const {Product} = require("../models/index")
const {Photo} = require("../models");

class ProductsController{
    async getProducts(req, res){
        try{
            console.log('getProducts', req.query, req.params, req.body)
            const {categoryId, subcategoryId, limit, offset} = req.query
            let products;
            let pages;
            let totalCount;
            if(subcategoryId === "all"){
                products = await Product.findAll({where: {categoryId}, offset, limit, include: [{model: Photo, as: 'photos'}]})
                totalCount = await Product.count({where: {categoryId}})
                if(totalCount > limit) pages = 1
                else pages = Math.ceil(totalCount / limit)
            }
            else{
                products = await Product.findAll({where: {categoryId, subcategoryId}, offset, limit, include: [{model: Photo, as: 'photos'}]})
                totalCount = await Product.count({where: {categoryId, subcategoryId}})
                if(totalCount > limit) pages = 1
                else pages = Math.ceil(totalCount / limit)
            }
            return res.json({"products": products, pages: pages})
        }
        catch (e) {
            console.log('e', e)
        }

    }
}

module.exports = new ProductsController()
