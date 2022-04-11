const Router = require("express")
const router = new Router()
const subCategoryController = require("../controllers/subCategoryController")

router.get("/", subCategoryController.getSubCategories)
router.post("/", subCategoryController.createSubCategories)

module.exports = router