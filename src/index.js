import express from "express"
import dotenv from "dotenv"
const app = express()

dotenv.config()

const port = 3000 || process.env.PORT
app.listen(port, () => {
    console.log(`Save me listening on ${port}`)
})