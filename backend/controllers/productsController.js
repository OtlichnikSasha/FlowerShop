const {Product} = require("../models/index")

class ProductsController{
    async getProducts(req, res){
        const products = await Product.findAll()
        return res.json(products)
    }
}

module.exports = new ProductsController()
