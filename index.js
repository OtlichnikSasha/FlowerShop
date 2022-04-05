require('dotenv').config()
const express = require("express")
const app = express()
const sequelize = require("./backend/dbConnection")
const cors = require('cors')
const models = require("./backend/models")
const router = require("./backend/routes")

app.use(cors())
app.use(express.json({extended: true}))
app.use(express.urlencoded({extended: true}))
app.use("/api", router)
const PORT = process.env.PORT || 5000

async function start() {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Port: ${PORT}`))
    } catch (e) {
        console.log('Server Error', e.message)
        proccess.exit(1)
    }
}

start()