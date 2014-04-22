/*

Oppgave 5

Lag en webserver! Send filene i mappen "files" ved å bruke I/O.

1. Løs oppgaven
2. Restart node
3. Åpne http://localhost:8080/index.html
4. Se at html-filen "index.html" i mappen "files" sendes tilbake til brukeren
5. Se at bildet også vises

*/

var http = require('http');
var url = require('url');
var fs = require("fs");
var modul = require('./4-modul.js');

http.createServer(function(request, response) {
  var filepath = url.parse(request.url, true).pathname;
  var split = filepath.split(".");
  var contentType = modul.getContentType(split[1]);
  
  if (filepath.indexOf("favicon") != -1) {
    response.end();
	return;
  }
  
  response.writeHead(200, {'Content-Type': contentType});
  
  // Din kode her
  
}).listen(8080, '127.0.0.1');

console.log("Serveren din er i gang!");