const mysql = require('mysql2');

// db connect
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'frigate'
});

connection.connect((err) => {
    if(!err){
        console.log('DB connected Successfully!!!');
    }else{
        console.log('Connection error', err);
    }
});

connection.end();

module.exports = connection;