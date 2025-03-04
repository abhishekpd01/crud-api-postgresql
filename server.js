const express = require('express');
const pool = require('./db');

const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.json({ message: 'Hello from server!' });
})

app.listen(port, () => console.log(`Server is up and running on port ${port}`));