/*

Oppgave 1

Skriv "Hello World!"

1. L�s oppgaven
2. Start node
3. �pne http://localhost:8080
4. Se at det st�r "Hello World!"

*/

var http = require('http');

http.createServer(function(request, response) {
  
  response.writeHead(200, {'Content-Type': 'text/plain'});
  // Din kode her
  response.end();
  
}).listen(8080, '127.0.0.1');

console.log("Serveren din er i gang!");