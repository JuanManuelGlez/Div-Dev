
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
    host: 'ec2-34-214-126-148.us-west-2.compute.amazonaws.com',
    user: 'divdev',
    database: 'divdev',
    password: 'Jorgito@22'
};

const pool = mysql.createPool(DB_DEV_EC);

module.exports = pool.promise();