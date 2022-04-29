const {SubCategory} = require("../models/index")

class SubCategoryController{
    async getSubCategories(req, res){
        try{
            const {categoryId} = req.query
            const subCategories = await SubCategory.findAll({where:{categoryId}})
            return res.json(subCategories)
        }
        catch (e){
            return res.status(500).json({message: e.message})
        }

    }

    async createSubCategories(req, res){
        try{
            const {categoryId, name} = req.body
            console.log('createSubCategories', categoryId, name)
            const subCategories = await SubCategory.create({name, categoryId})
            return res.json(subCategories)
        }
        catch (e) {
            return res.status(500).json({message: e.message})
        }
    }
}

module.exports = new SubCategoryController()
