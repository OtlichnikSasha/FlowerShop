const Router = require("express")
const router = new Router()
const productController = require("../controllers/productController")

router.post("/", productController.createProduct)

router.get("/", productController.getProduct)

router.post("/favorite", productController.addFavorite)
router.delete("/favorite", productController.removeFavorite)

module.exports = router