// console.log

var a = 32+10;
console.log("Tallet er " + a);

// require

var os = require('os');
console.log(os.type());

// egen modul

var minModul = require('./minmodul.js');
console.log(minModul.leggTilTi(100));

// http

var minServer = function(request, response) {
    console.log("Hei!");
    response.end();
}

var http = require('http');
var server = http.createServer(minServer);
server.listen(8080);

// response.write

var minServer = function(request, response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<h1>Hei bruker!</h1>");
    response.end();
}

var http = require('http');
http.createServer(minServer).listen(8080);

// I/O

var http = require('http');
var fs = require('fs');

var minServer = function(request, response) {
    response.writeHead(200, {"Content-Type": "image/jpeg"});
    
    fs.readFile("./tasks/files/fluffy.jpg", function(err, file) {
        response.write(file);
        response.end();
    });
}

http.createServer(minServer).listen(8080);