import express from "express"

const app = express()


const port = 3000 || process.env.PORT
app.listen(port, () => {
    console.log(`Save me listening on ${port}`)
})