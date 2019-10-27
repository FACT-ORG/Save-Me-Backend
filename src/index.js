import express from "express"
import dotenv from "dotenv"
import logger from "morgan"
import bodyParser from "body-parser"
import cors from "cors"

import routes from "./routes"
const app = express()
dotenv.config()

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
routes(app);

app.get('/*', (req, res) => res.status(200).send({
    message: 'Route not found',
}));
const port = 3000 || process.env.PORT
app.listen(port, () => {
    console.log(`Save me listening on ${port}`)
})