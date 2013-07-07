var express = require('express');
var buf = new Buffer(30);
var fs = require("fs"); 
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(
      buf.toString(fs.readFile('index.html'), "utf-8")
  );
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

