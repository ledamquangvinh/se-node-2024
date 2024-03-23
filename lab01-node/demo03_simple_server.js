//simple server

var http = require('http');

http.createServer(function(request, response) {
  response.writeHead(200);
  response.write("Hello World");
  setTimeout(() => {
    response.write("this is second response");
    response.end();
  }, 1000)


}).listen(8080, function() {
  console.log("Listen on port 8080");
})