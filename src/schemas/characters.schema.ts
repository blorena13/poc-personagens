import Joi from "joi";
import { Characters } from "../protocols/characters.protocols"

export const charactersSchema = Joi.object<Characters>({
    name: Joi.string().required(),
    constellation: Joi.number(),
    stars: Joi.number()
})