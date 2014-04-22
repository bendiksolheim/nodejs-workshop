/*

Oppgave 6

Lag en v�rtjeneste! Bruk REST-tjenesten p� openweathermap.org for � hente v�ret i Oslo som JSON. 

1. L�s oppgaven
2. Restart node
3. �pne http://localhost:8080
4. Se nyttig info om v�ret: (i �kende vanskelighetsgrad)
   - En tekststreng som beskriver v�ret
   - Temperaturen i Celsius
   - Et ikon for v�ret
   - S�kefelt for hvilken by v�ret skal vises for
   - Vis embedded Google Maps med lokasjonen til byen
   - Gj�r noe annet du synes er kult!

Hint: For � f� v�ret i Oslo, �pne http://api.openweathermap.org/data/2.5/weather?q=Oslo,no
Hint: Bruk requestLib for � kalle en annen tjeneste. Den m� f�rst installeres med "npm install request".

*/

var http = require('http');
var url = require('url');
var requestLib = require("request");

http.createServer(function(request, response) {
  if (request.url.indexOf("favicon") != -1) {
    response.end();
	return;
  }

  response.writeHead(200, {'Content-Type': 'text/html'});
  
  response.write("<h1>V&aelig;ret!</h1>");
  
  response.write("<img src='http://openweathermap.org/img/w/01d.png'/>");

  // Din kode her
  
}).listen(8080, '127.0.0.1');

console.log("Serveren din er i gang!");