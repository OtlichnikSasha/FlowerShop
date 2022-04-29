const {Flower} = require("../models/index")

class FlowersController{
    async getFlowers(req, res){
        try{
            const flowers = await Flower.findAll()
            return res.json(flowers)
        }
        catch(e){
            return res.status(500).json({message: e.message})
        }

    }

    async createFlower(req, res){
        try{
            const {name} = req.body
            const category = await Flower.create({name})
            return res.json(category)
        }
        catch(e){
            return res.status(500).json({message: e.message})
        }
    }
}

module.exports = new FlowersController()
