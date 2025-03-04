const { Pool } = require('pg');
const pool = new Pool({
    host: 'db',
    port: 5432,
    user: 'user12',
    password: 'pass12',
    database: 'db12'
})

module.exports = pool;