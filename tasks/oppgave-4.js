/*

Oppgave 4

Lag en modul i en fil kalt "4-modul.js". Modulen skal eksportere en funksjon kalt "getContentType". Denne funksjonen tar imot en streng og returnerer en ny streng etter følgende regler:

input "html" gir output "text/html"
input "jpg" git output "image/jpeg"

1. Løs oppgaven
2. Restart node
3. Åpne http://localhost:8080/foo.html
4. Se at det står "text/html"
5. Åpne http://localhost:8080/foo.jpg
6. Se at det står "image/jpeg"

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