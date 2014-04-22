/*

Oppgave 4

Fasit

*/

var http = require('http');
var url = require('url');
var modul = require('./4-fasit-modul.js');

http.createServer(function(request, response) {
  
  response.writeHead(200, {'Content-Type': 'text/plain'});
  
  var filepath = url.parse(request.url, true).pathname;
  var split = filepath.split(".");
  var contentType = modul.getContentType(split[1]);
  response.write(contentType);
  
  response.end();
  
}).listen(8080, '127.0.0.1');

console.log("Serveren din er i gang!");