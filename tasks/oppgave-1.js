/*

Oppgave 1

Skriv "Hello World!"

1. Løs oppgaven
2. Start node
3. Åpne http://localhost:8080
4. Se at det står "Hello World!"

*/

var http = require('http');

http.createServer(function(request, response) {
  
  response.writeHead(200, {'Content-Type': 'text/plain'});
  // Din kode her
  response.end();
  
}).listen(8080, '127.0.0.1');

console.log("Serveren din er i gang!");