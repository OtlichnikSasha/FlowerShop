const {Product} = require("../models/index")

class ProductController {
    async createProduct(req, res) {
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
    }

    async getProduct(req, res) {
        const {id} = req.query
        const product = await Product.findOne({where: {id}})
        return res.json(product)
    }
}

module.exports = new ProductController()
