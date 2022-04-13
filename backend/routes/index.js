const Router = require("express")
const router = new Router()
const categoryRouter = require("./categoryRouter")
const subCategoryRouter = require("./subCategoryRouter")
const basketRouter = require("./basketRouter")
const productRouter = require("./productRouter")
const productsRouter = require("./productsRouter")
const userRouter = require("./userRouter")
const flowersRouter = require("./flowersRouter")

router.use("/user", userRouter)
router.use("/products", productsRouter)
router.use("/product", productRouter)
router.use("/categories", categoryRouter)
router.use("/subCategories", subCategoryRouter)
router.use("/basket", basketRouter)
router.use("/flowers", flowersRouter)

module.exports = router
