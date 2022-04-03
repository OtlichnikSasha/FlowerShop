const Router = require("express")
const router = new Router()
const categoryRouter = require("./categoryRouter")
const subCategoryRouter = require("./subCategoryRouter")
const basketRouter = require("./basketRouter")
const productRouter = require("./productRouter")
const productsRouter = require("./productsRouter")
const userRouter = require("./userRouter")

router.use("/user", userRouter)
router.use("/products", productsRouter)
router.use("/product", productRouter)
router.use("/categories", categoryRouter)
router.use("/subCategories", subCategoryRouter)
router.use("/basket", basketRouter)

module.exports = router
