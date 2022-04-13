const {Flower} = require("../models/index")

class FlowersController{
    async getFlowers(req, res){
        const flowers = await Flower.findAll()
        return res.json(flowers)
    }

    async createFlower(req, res){
        const {name} = req.body
        const category = await Flower.create({name})
        return res.json(category)
    }
}

module.exports = new FlowersController()
