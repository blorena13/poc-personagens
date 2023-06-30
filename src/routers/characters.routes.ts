import { Router } from "express";
import charactersController from "../controllers/characters.controller";

const charactersRouter = Router();
charactersRouter.get("/characters", charactersController.getCharacters);
charactersRouter.post("/characters", charactersController.createCharacters);

export default charactersRouter;