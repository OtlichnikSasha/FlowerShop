const Router = require("express")
const router = new Router()
const categoryController = require("../controllers/categoryController")

router.get("/", categoryController.getCategories)


router.post("/", categoryController.createCategory)

module.exports = router