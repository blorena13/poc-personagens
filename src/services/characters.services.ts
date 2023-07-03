import charactersRepository from "../repositories/characters.repository";

async function getCharacters(){
    const result = await charactersRepository.getCharacters();
    return result;
}

async function createCharacters(name: string, constellation: number, stars: number){

    const existsCharacters = await charactersRepository.getByName(name);
    if(existsCharacters.length !== 0) {
        return null;
    }

    await charactersRepository.createCharacters(name, constellation, stars);
}

async function updateCharacters(name: string, constellation: number, stars: number, id:number){

    const existsCharacters = await charactersRepository.getById(id);
    if(existsCharacters.length === 0) {
        return null;
    }

    await charactersRepository.updateCharacters(name, constellation, stars, id);
}

async function deleteCharacters(id: number){

    const existsId = await charactersRepository.getById(id);
    if(existsId.length === 0){
        return null;
    }

    await charactersRepository.deleteCharacters(id);
}


const charactersService = {
    getCharacters,
    updateCharacters,
    deleteCharacters,
    createCharacters
}

export default charactersService;