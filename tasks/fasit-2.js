/*

Oppgave 2

Fasit

*/

var http = require('http');
var url = require('url');

http.createServer(function(request, response) {
  
  response.writeHead(200, {'Content-Type': 'text/plain'});
  
  var parsedUrl = url.parse(request.url, true);
  var parametere = parsedUrl.query;
  var navn = parametere.navn;
  response.write("Hei " + navn);
  
  response.end();
  
}).listen(8080, '127.0.0.1');

console.log("Serveren din er i gang!");