const {Category} = require("../models/index")

class CategoryController{
    async getCategories(req, res){
        try{
            const categories = await Category.findAll()
            return res.json(categories)
        }
        catch(e){
            return res.status(500).json({message: e.message})
        }

    }

    async createCategory(req, res){
        try{
            const {name} = req.body
            const category = await Category.create({name})
            return res.json(category)
        }
        catch(e){
            return res.status(500).json({message: e.message})
        }
    }
}

module.exports = new CategoryController()
