/*

Oppgave 6

Fasit

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
  
  var by = url.parse(request.url, true).query.by;
  
  if (by == undefined) {
    by = "Oslo";
  }
  
  response.write("<form><input type='text' value='" + by + "' name='by'/><input type='submit'/></form>");
  
  var restURL = "http://api.openweathermap.org/data/2.5/weather?q=" + by + ",no";

  requestLib.get(restURL, function(err, res, body) {
    if (!err) {
      var resultsObj = JSON.parse(body);
      
      var weather = {
        icon: resultsObj.weather[0].icon,
        description: resultsObj.weather[0].description,
        temperature: Math.round(resultsObj.main.temp - 273.15)
      }
  
      var weatherString = "<img src='http://openweathermap.org/img/w/" + weather.icon + ".png'/>";
      weatherString += "<p>" + weather.description + "</p>";
      weatherString += "<p>" + weather.temperature + " &deg;C</p>";
      
      response.write(weatherString);
    } else {
      console.log(err);
    }
  
    response.end();
  });
  
}).listen(8080, '127.0.0.1');

console.log("Serveren din er i gang!");