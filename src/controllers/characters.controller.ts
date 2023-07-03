import httpStatus from "http-status";
import { Request, Response } from "express";
import charactersService from "../services/characters.services";
import charactersRepository from "../repositories/characters.repository";
import { Characters } from "../protocols/characters.protocols";
import { number } from "joi";


async function getCharacters(req: Request, res: Response){
    try{
        const characters = await charactersService.getCharacters();
        res.send(characters);

    } catch(err){
        res.status(500).send(httpStatus.NOT_FOUND);
    }
}

async function createCharacters(req: Request, res: Response){
    const { name, constellation, stars } = req.body as Characters;


   const sucess = await charactersService.createCharacters(name, constellation, stars);
   if(sucess === null){
    return res.status(404).send("Este personagem já existe!"); //notfound
   }
    res.sendStatus(httpStatus.CREATED);

}

async function updateCharacters(req: Request, res: Response){
    const { name, constellation, stars } = req.body as Characters;
    const { id } = req.params;

    const sucess = await charactersService.updateCharacters(name, constellation, stars, parseInt(id));
    if(sucess === null){
        return res.sendStatus(httpStatus.NOT_FOUND);
    }
    res.sendStatus(httpStatus.OK);
}

async function deleteCharacters(req: Request, res: Response){
    const { id } = req.params;
    const parseId = Number(id)


    const sucess = await charactersService.deleteCharacters(parseId);
    if(sucess === null){
        return res.sendStatus(httpStatus.NOT_FOUND);
    }
    res.sendStatus(httpStatus.OK);
}

const charactersController = {
    getCharacters,
    createCharacters,
    updateCharacters,
    deleteCharacters
}

export default charactersController;