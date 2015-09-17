// server.js

// Load the http module to create an http server.
var http = require('http');
//
// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "application/json"});
  if (process.env.VCAP_SERVICES) {
    response.write(process.env.VCAP_SERVICES);
  }
  else {
    response.write('{}');
  }
  response.end();
});

var port = process.env.PORT || 3000;

server.listen(port);
console.log('App listening on port: ', port);
console.log('Services: ', process.env.VCAP_SERVICES);
