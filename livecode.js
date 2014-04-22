/*
 *	Del 1: Console.log + Response.write
 */

 /*
 *	Del 2: Modules og require
 */

 /*
 *	Del 3: I/O
 */


 /*
 *	Del 4: Asynkronitet og callbacks
 */



 /*
 *	Del 5: HTTP Client (hent noe fra en URL)
 */

var http = require('http');
var requestLib = require('request');

var url = "http://api.openweathermap.org/data/2.5/weather?q=Oslo,no";

http.createServer(function(request, response) {
	requestLib(url, function(err, getResponse, getBody) {
		if (err) {
			return response.end(500);
		}

		response.writeHead(200, {'Content-Type': getResponse.contentType});
		response.write(getBody);
		response.end();
	});
}).listen(1337, "127.0.0.1");

console.log("running!");