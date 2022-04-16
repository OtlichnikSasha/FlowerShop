const {Product} = require("../models/index")
const {Photo} = require("../models/index");
const {ProductDetails} = require("../models/index");

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
        try{
            const product = await Product.findOne(
                {
                    where: {id},
                    include:  [{model: Photo, as: 'photos'}],
                }
            )
            const views = product.views + 1
            await product.update({views}, { where: { id: product.id} })
            return res.json(product)
        }
        catch(e){
            console.log('e', e)
        }

    }
}

module.exports = new ProductController()
