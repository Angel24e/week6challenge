var url = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={apiKey}";

var apiKey = "8219a083f3ff48dd2821a341d20ad1ff"

fetch(url)
  .then(function (response) {
     return response.json();
  })
  .then(function(data) {
     console.log(data);
  });
