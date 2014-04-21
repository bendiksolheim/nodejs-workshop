/*

Oppgave 4

Lag en modul i en fil kalt "4-modul.js". Modulen skal eksportere en funksjon kalt "getContentType". Denne funksjonen tar imot en streng og returnerer en ny streng etter f�lgende regler:

input "html" gir output "text/html"
input "jpg" git output "image/jpeg"

1. L�s oppgaven
2. Restart node
3. �pne http://localhost:8080/foo.html
4. Se at det st�r "text/html"
5. �pne http://localhost:8080/foo.jpg
6. Se at det st�r "image/jpeg"

*/

var http = require('http');
var url = require('url');
var modul = require('./4-modul.js');

http.createServer(function(request, response) {
  
  response.writeHead(200, {'Content-Type': 'text/plain'});
  
  var filepath = url.parse(request.url, true).pathname;
  var split = filepath.split(".");
  var contentType = modul.getContentType(split[1]);
  response.write(contentType);
  
  response.end();
  
}).listen(8080, '127.0.0.1');

console.log("Serveren din er i gang!");