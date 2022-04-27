require('dotenv').config()
const express = require("express")
const sequelize = require("./backend/dbConnection")
const cors = require('cors')
const router = require("./backend/routes")
const app = express()

const corsOptions ={
    origin:'http://localhost:3000',
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(express.json({extends: true}))
app.use("/api", router)

const PORT = process.env.PORT || 5000

async function start() {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Port: ${PORT}`))
    } catch (e) {
        console.log('Server Error', e)
    }
}

start()