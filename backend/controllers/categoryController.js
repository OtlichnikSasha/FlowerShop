const {Category} = require("../models/index")

class CategoryController{
    async getCategories(req, res){
        const categories = await Category.findAll()
        return res.json(categories)
    }
}

module.exports = new CategoryController()
