var APIkey = "d47bf282954b0842d96677fee770a673"

var lon;

var lat;

var url = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={APIkey}";

function fetchWeather() {
   fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data);
      })
}

fetchWeather();