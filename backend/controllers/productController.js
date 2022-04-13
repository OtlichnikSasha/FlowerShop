const {Product} = require("../models/index")
const {Photo} = require("../models/index");

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
        console.log('id', id)
        try{
            const product = await Product.findOne(
                {
                    where: {id},
                    include: [{model: Photo, as: 'photos'}]
                }
            )
            return res.json(product)
        }
        catch(e){
            console.log('e', e)
        }

    }
}

module.exports = new ProductController()
