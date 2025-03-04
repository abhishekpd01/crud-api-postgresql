const express = require('express');
const pool = require('./db');

const app = express();
const port = 5000;

app.use(express.json());

app.get('/', async (req, res) => {
    try {
        const data = await pool.query('SELECT * FROM schools');
        res.status(201).json(data.rows);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})

app.post('/', async (req, res) => {
    const { name, location } = req.body;

    try {
        await pool.query('INSERT INTO schools(name, location) VALUES($1, $2)', [name, location]);
        res.status(201).json({message: 'Successfully added child!'});
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
        
    }
})

app.get('/setup-table', async (req, res) => {
    try {
        await pool.query('CREATE TABLE IF NOT EXISTS schools( id SERIAL PRIMARY KEY ), name VARCHAR(50), location VARCHAR(100)');
        res.status(201).json({message: 'Successfully created table!'});
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})

app.listen(port, () => console.log(`Server is up and running on port ${port}`));