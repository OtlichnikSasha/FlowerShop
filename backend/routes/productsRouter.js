const Router = require("express")
const router = new Router()
const productsController = require("../controllers/productsController")

router.get("/", productsController.getProducts)
router.get("/favorite", productsController.getFavoriteProducts)
router.get("/similar", productsController.getSimilarProducts)
router.get("/cell", productsController.getCellProducts)
router.get("/popular", productsController.getPopularProducts)
router.get("/sorting", productsController.getSortingProducts)
router.get("/data", productsController.getProductsData)

module.exports = router