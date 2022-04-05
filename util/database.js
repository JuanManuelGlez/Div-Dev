
const mysql = require('mysql2');

const DB_ANDRES = {
    host: 'localhost',
    user: 'root',
    database: 'divdev',
    password: 'root',
    port: '8889'
};

const DB_DEV = {
    host: 'localhost',
    user: 'root',
    database: 'divdev',
    password: '',
};

const pool = mysql.createPool(DB_DEV);

module.exports = pool.promise();