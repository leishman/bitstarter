var express = require('express');
var fs = require("fs");
var buf = fs.readFileSync('index.html');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var data = buf.toString();
    response.send(data);
  
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

