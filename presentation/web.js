var http = require('http');
var reload = require('reload');

function responder(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World\n');
}

var server = http.createServer(responder);

reload(server, null);

server.listen(1337);
console.log('Nå kjører serveren! (på http://localhost:1337/)');
