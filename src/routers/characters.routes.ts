import { Router } from "express";
import charactersController from "../controllers/characters.controller";
import { validateSchema } from "../middlewares/validateSchema";
import { charactersSchema } from "../schemas/characters.schema";

const charactersRouter = Router();
charactersRouter.get("/characters", charactersController.getCharacters);
charactersRouter.post("/characters", validateSchema(charactersSchema), charactersController.createCharacters);
charactersRouter.put("/characters/:id", charactersController.updateCharacters);
charactersRouter.delete("/characters/:id", charactersController.deleteCharacters);

export default charactersRouter;