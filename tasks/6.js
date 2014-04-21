/*

Oppgave 6

Lag en værtjeneste! Bruk REST-tjenesten på openweathermap.org for å hente været i Oslo som JSON. 

1. Løs oppgaven
2. Restart node
3. Åpne http://localhost:8080
4. Se nyttig info om været: (i økende vanskelighetsgrad)
   - En tekststreng som beskriver været
   - Temperaturen i Celsius
   - Et ikon for været
   - Søkefelt for hvilken by været skal vises for
   - Vis embedded Google Maps med lokasjonen til byen

Hint: For å få været i Oslo, åpne http://api.openweathermap.org/data/2.5/weather?q=Oslo,no
Hint: Bruk require('request') for å kalle en annen tjeneste

*/

var http = require('http');
var url = require('url');

http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  
  response.write("<h1>V&aelig;ret!</h1>");
  
  response.write("<img src='http://openweathermap.org/img/w/01d.png'/>");

  // Din kode her
  
  response.end();
  
}).listen(8080, '127.0.0.1');

console.log("Serveren din er i gang!");