const {SubCategory} = require("../models/index")

class SubCategoryController{
    async getSubCategories(req, res){
        const {categoryId} = req.params
        const subCategories = await SubCategory.findAndCountAll({where:{categoryId}})
        return res.json(categories)
    }
}

module.exports = new SubCategoryController()
