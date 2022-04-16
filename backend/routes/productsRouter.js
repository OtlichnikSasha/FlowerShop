const Router = require("express")
const router = new Router()
const productsController = require("../controllers/productsController")

router.get("/", productsController.getProducts)
router.get("/sorting", productsController.getSortingProducts)
router.get("/data", productsController.getProductsData)

module.exports = router