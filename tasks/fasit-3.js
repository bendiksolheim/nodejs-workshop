/*

Oppgave 3

Fasit

*/

var http = require('http');
var url = require('url');

http.createServer(function(request, response) {
  
  response.writeHead(200, {'Content-Type': 'text/plain'});
  
  var fibonacci = function(n) {
    var results = [0, 1];
    for (var i = 2; i <= n; i++) {
	  results.push(results[i-1] + results[i-2]);
	}
	return results[n];
  }
  
  var n = url.parse(request.url, true).query.n;
  if (n != undefined) {
    var result = fibonacci(n);
    response.write(result.toString());
  }
  
  response.end();
  
}).listen(8080, '127.0.0.1');

console.log("Serveren din er i gang!");