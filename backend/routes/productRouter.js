const Router = require("express")
const router = new Router()
const productController = require("../controllers/productController")

router.post("/", productController.createProduct)

router.get("/", productController.getProduct)

module.exports = router