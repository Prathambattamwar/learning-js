var mysql=require('mysql');

var con =mysql.createConnection({
    host:"localhost",
    user: "yourusername",
    password: "password"
}).listen(8080);

con.connect(function(err){
    if(err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE Mmydb",function (err, result) {
        if(err) throw err;
        console.log("database created");
    });
});