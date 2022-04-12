const {Product} = require("../models/index")

class ProductsController{
    async getProducts(req, res){
        try{
            console.log('getProducts', req.query, req.params, req.body)
            const {categoryId, subcategoryId} = req.query
            let products;
            if(subcategoryId === "all"){
                products = await Product.findAll({where: {categoryId}})
            }
            else{
                products = await Product.findAll({where: {categoryId, subcategoryId}})
            }
            return res.json(products)
        }
        catch (e) {
            console.log('e', e)
        }

    }
}

module.exports = new ProductsController()
