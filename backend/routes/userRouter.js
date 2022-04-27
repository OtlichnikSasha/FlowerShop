const Router = require("express")
const router = new Router()
const userController = require("../controllers/userController")

router.get("/")
router.post("/authorization", userController.authorization)
router.post("/registration", userController.registration)

module.exports = router