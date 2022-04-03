const Router = require("express")
const router = new Router()
const productsController = require("../controllers/productsController")

router.get("/", productsController.getProducts)

module.exports = router