var mysql = require('mysql');
var express = require('express');
var app = express();

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "bilax_db"
});
con.connect(function(err) {
    if (err) throw err
    console.log('You are now connected...')
  })

app.get('/login', function(req, res){
    con.query("SELECT * FROM tb_utenti WHERE user = ?",[req.query.user] , function (err, result, fields) {
        if (err) {
            // console.log("error ocurred",error);
            res.send("failed error ocurred")
        }else{
            // console.log('The solution is: ', results);
            if(result.length >0){
              if(result[0].pwd == req.query.password){
                res.send(result[0].nome);
              }
              else{
                res.send("user and password does not match");
              }
            }
            else{
              res.send("user does not exits");
            }
        }
    });
});

app.listen(3000);