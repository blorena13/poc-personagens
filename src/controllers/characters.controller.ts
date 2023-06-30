import httpStatus from "http-status";
import { Request, Response } from "express";
import charactersService from "../services/characters.services";
import charactersRepository from "../repositories/characters.repository";
import { Characters } from "../protocols/characters.protocols";


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

   await charactersRepository.createCharacters(name, constellation, stars);
    res.sendStatus(httpStatus.CREATED);

}

const charactersController = {
    getCharacters,
    createCharacters
}

export default charactersController;