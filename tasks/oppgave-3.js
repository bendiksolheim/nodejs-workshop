/*

Oppgave 3

Skriv det n-te fibonacci-tallet

1. Løs oppgaven
2. Restart node
3. Åpne http://localhost:8080?n=8
4. Se at det står 21
5. Åpne http://localhost:8080?n=50
6. Se at det står 12586269025

Hint: response.write() tar kun streng som parameter. Tall må konverteres til med metoden toString. F.eks: foo.toString()

*/

var http = require('http');
var url = require('url');

http.createServer(function(request, response) {
  
  response.writeHead(200, {'Content-Type': 'text/plain'});
  
  // Skriv koden din her
  
  response.end();
  
}).listen(8080, '127.0.0.1');

console.log("Serveren din er i gang!");