const Router = require("express")
const router = new Router()
const categoryController = require("../controllers/categoryController")

router.get("/", categoryController.getCategories)

module.exports = router