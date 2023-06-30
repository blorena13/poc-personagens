import charactersRepository from "../repositories/characters.repository";

async function getCharacters(){
    const result = await charactersRepository.getCharacters();
    return result;
}


const charactersService = {
    getCharacters
}

export default charactersService;