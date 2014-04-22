/*

Oppgave 2

Skriv "Hei <navn>"

1. Løs oppgaven
2. Restart node
3. Åpne http://localhost:8080?navn=Holger
4. Se at det står "Hei Holger"

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