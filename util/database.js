
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
    password: ''
};

const DB_DEV_EC = {
    host: 'localhost',
    user: 'divdev',
    database: 'divdev',
    password: 'Jorgito@22',
    port: 3306
};

const pool = mysql.createPool(DB_DEV);

module.exports = pool.promise();