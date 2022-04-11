const {SubCategory} = require("../models/index")

class SubCategoryController{
    async getSubCategories(req, res){
        let {categoryId} = req.query
        console.log('categoryId', categoryId)
        const subCategories = await SubCategory.findAll({where:{categoryId}})
        return res.json(subCategories)
    }

    async createSubCategories(req, res){
        let {categoryId, name} = req.body
        console.log('createSubCategories', categoryId, name)
        const subCategories = await SubCategory.create({name, categoryId})
        return res.json(subCategories)
    }
}

module.exports = new SubCategoryController()
