const Router = require("express")
const router = new Router()
const subCategoryController = require("../controllers/subCategoryController")

router.get("/", subCategoryController.getSubCategories)

module.exports = router