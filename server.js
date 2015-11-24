// server.js
var stringify = require('node-stringify');

// Load the http module to create an http server.
var http = require('http');
//
// Configure our HTTP server to respond with Hello World to all requests.
var port = process.env.PORT || 3000;

var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "application/json"});
  response.write(stringify(process.env));
  response.end();
});

server.listen(port);

console.log('App listening on port: ', port);
console.log('Services: ', stringify(process.env));
