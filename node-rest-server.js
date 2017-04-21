var express = require('express');
var app = express();
var fs = require("fs");

app.get('/users', function (req, res) {
   fs.readFile( __dirname + "/" + "people.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Rest endpoint started at http://%s:%s", host, port)
  console.log("Try hitting the context /users")
})