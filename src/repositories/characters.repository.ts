import db from "../database/database";
import { Characters } from "../protocols/characters.protocols";

type createOne = Omit<Characters, "id">

async function getCharacters(){
    const query = `SELECT * FROM characters;`
    const result = await db.query<Characters>(query)
    
    return result.rows;
    
}

async function getByName(name: string){
    const query = `SELECT * FROM characters WHERE name=$1;`
    const result = await db.query(query, [name]);
   
   return result.rows;
}

async function getById(id: number){
    const query = `SELECT * FROM characters WHERE id=$1;`
    const result = await db.query(query, [id]);
    return result.rows;
}

async function createCharacters(name: string, constellation: number, stars: number){
    const query = `INSERT INTO characters (name, constellation, stars) VALUES ($1, $2, $3);`
    const result = await db.query(query, [name, constellation, stars])
}

async function updateCharacters( name: string, constellation: number, stars: number, id: number,){
    const query = `UPDATE characters SET "name"=$1, "constellation"=$2, "stars"=$3 WHERE id=$4;`

    return await db.query(query, [name, constellation, stars, id]);
}

async function deleteCharacters(id: number){
    const query = `DELETE FROM characters WHERE id=$1;`
    return await db.query(query, [id]);
}

const charactersRepository = {
    getCharacters,
    getByName,
    getById,
    createCharacters,
    updateCharacters,
    deleteCharacters
}

export default charactersRepository;