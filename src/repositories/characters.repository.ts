import db from "../database/database";
import { Characters } from "../protocols/characters.protocols";

type createOne = Omit<Characters, "id">

async function getCharacters(){
    const query = `SELECT * FROM characters;`
    const result = await db.query<Characters>(query)
    
    return result.rows;
    
}

async function createCharacters(name: string, constellation: number, stars: number){
    const query = `INSERT INTO characters (name, constellation, stars) VALUES ($1, $2, $3);`
    const result = await db.query(query, [name, constellation, stars])
}

const charactersRepository = {
    getCharacters,
    createCharacters
}

export default charactersRepository;