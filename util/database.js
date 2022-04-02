
const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'divdev',
<<<<<<< HEAD
    password: 'root',
    port: '8889'
=======
    password: '',

>>>>>>> b37e23e8da6d12adb2bc564b789e6ac146ca315b
});

module.exports = pool.promise();