const {Category} = require("../models/index")

class CategoryController{
    async getCategories(req, res){
        const categories = await Category.findAll()
        return res.json(categories)
    }

    async createCategory(req, res){
        const {name} = req.body
        const category = await Category.create({name})
        return res.json(category)
    }
}

module.exports = new CategoryController()
