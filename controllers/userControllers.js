import Pool from "../db/db.js";

export const getAllUsers = async (req, res) => {
    try{
        const result = await Pool.query('SELECT * FROM users');
        console.log(result.rows);
        res.json(result.rows);

    }catch(error){
        res.status(500).send("no users found");
    }
    }

export const createUser = async (req, res) =>{
    console.log("Incoming POST /users");
    console.log("Headers:", req.headers);
    console.log("Body:", req.body);
    try{
        const {name, city} = req.body;
        const result = await Pool.query('INSERT INTO users (name, city) VALUES ($1, $2) RETURNING *', [name, city]);
        res.status(201).json(result.rows[0]);
    }catch(error){
        console.log("Error", error);
        res.status(500).send("Something went wrong");
    }
}


