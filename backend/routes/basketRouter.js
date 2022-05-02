const Router = require("express")
const router = new Router()
const BasketController = require("../controllers/basketController")

router.get("/", BasketController.getBasket)

router.post("/", BasketController.addBasket)
router.delete("/", BasketController.removeBasket)

module.exports = router