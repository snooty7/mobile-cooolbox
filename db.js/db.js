var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "03127353M@a"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");

});