/*

Oppgave 2

Skriv "Hei <navn>"

1. L�s oppgaven
2. Restart node
3. �pne http://localhost:8080?navn=Holger
4. Se at det st�r "Hei Holger"

Hint: Det inkluderte biblioteket "url" har en metode som heter "parse"

*/

var http = require('http');
var url = require('url');

http.createServer(function(request, response) {
  
  response.writeHead(200, {'Content-Type': 'text/plain'});
  // Din kode her
  response.end();
  
}).listen(8080, '127.0.0.1');

console.log("Serveren din er i gang!");