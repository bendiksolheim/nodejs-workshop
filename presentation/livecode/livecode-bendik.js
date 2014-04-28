/*
 *	FAVICON HACK
 */
console.log(request.url);
if (request.url.indexOf('favicon') > 0) {
	response.writeHead(404);
	return response.end();
}

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

 // Synkron kode

 var http = require('http');

function getFromDatabase() {
	var results = "Stuff";
	return results;
}

http.createServer(function(request, response) {
	response.writeHead(200, {'Content-Type': 'text/plain'});
	console.log("A");
	var result = getFromDatabase();
	console.log("B");
	response.end(result);
	console.log("C");
}).listen(1337, "127.0.0.1");

console.log("Running!");

// Asynkron kode

var http = require('http');

function getFromDatabase(callback) {
	setTimeout(function() {
		var results = "Stuff";
		callback(results);
	}, 2000);
	var results = "Stuff";
	return results;
}

http.createServer(function(request, response) {
	response.writeHead(200, {'Content-Type': 'text/plain'});
	console.log("A");
	getFromDatabase(function(result) {
		console.log("B");
		response.end(result);
	});
	console.log("C");
}).listen(1337, "127.0.0.1");

console.log("Running!");



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
		
		response.writeHead(200, {'Content-Type': getResponse.headers['content-type']});
		response.write(getBody);
		response.end();
	});
}).listen(1337, "127.0.0.1");

console.log("running!");