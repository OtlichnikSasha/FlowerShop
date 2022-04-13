const Router = require("express")
const router = new Router()
const flowersController = require("../controllers/flowersController")

router.get("/", flowersController.getFlowers)

router.post("/", flowersController.createFlower)

module.exports = router