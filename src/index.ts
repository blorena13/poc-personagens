import express, { json } from "express";
import "express-async-errors";
import charactersRouter from "./routers/characters.routes";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = parseInt(process.env.PORT) || 5000;

app.use(json());
app.use(charactersRouter);

app.listen(port, () => {
    console.log("servidor rodando!");
})