var mysql = require('mysql');

//buat koneksi database
const conn = mysql.createConnection({
    hoss:'localhost',
    user:'root',
    password:'',
    database:'dbrestapi'
});

conn.connect((err)=>{
    if(err) throw err;
    console.log('Myql terkoneksi')
});

module.exports = coon;