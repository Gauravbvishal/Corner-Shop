const mysql=require('mysql2');

const pool=mysql.createPool({
    host:'localhost',
    user:'root',
    database:'node-complete',
    password:'vishal123'
});

module.exports=pool.promise();

//npm install --save mysql2