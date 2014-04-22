/*

Oppgave 5

Fasit

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
  
  var relativePath = "files/" + filepath;
  
  fs.readFile(relativePath, "binary", function(err, file) {
    if(err) {
	  console.log(err);
	}
    response.write(file, "binary");
    response.end();
  });
  
}).listen(8080, '127.0.0.1');

console.log("Serveren din er i gang!");