const {Product, User} = require("../models/index")

class ProductController {
    async createProduct(req, res) {
        try{
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
        catch (e){
            return res.status(500).json({message: e.message})
        }
    }



    async getProduct(req, res) {
        const {id} = req.query
        try{
            const product = await Product.findOne(
                {
                    where: {id},
                    include:  [
                        {all: true},
                    ],
                }
            )
            const views = product.views + 1
            await product.update({views}, { where: { id: product.id} })
            return res.json(product)
        }
        catch(e){
            return res.status(500).json({message: e.message})
        }
    }
}

module.exports = new ProductController()
