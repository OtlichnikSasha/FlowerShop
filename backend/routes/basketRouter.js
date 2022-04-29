const Router = require("express")
const router = new Router()
const BasketController = require("../controllers/basketController")

router.get("/")

router.post("/", BasketController.addBasket)

module.exports = router