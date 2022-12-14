/*🌞 🌧️ 🌨️ ☁️ emojis for forecast5days*/
var APIkey = "d47bf282954b0842d96677fee770a673"

var lat;

var lon;

var differentUrl = `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}`

var handleSearchButton = document.querySelector(".handleSearchButton");

let searchInput = document.getElementById("search");

var currentResults = document.querySelector(".currentResults");

var forecastTemp = document.querySelector(".temp");

var forecastWind = document.querySelector(".wind");

var forecastHumidity = document.querySelector(".humidity");

function fetchWeather(event) {
  event.preventDefault();
  console.log(searchInput.value);
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&units=imperial&appid=${APIkey}`)
    .then(function (response) {
      return response.json();
    })
    .then(function(data) {
      displayCurrentWeather(data);
      fetchForecast(data);
    })
}

function fetchForecast(weather) {
  fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${weather.coord.lat}&lon=${weather.coord.lon}&units=imperial&exclude={part}&appid=${APIkey}`)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    gather5day(data);
  })
}

function gather5day(forecastData) {
  forecastTemp.textContent = "banana";
}


var individualResults = document.querySelector(".individualResults")
// 
for(var i = 0; i < 4; i++) {
  // making the boxes
  var createResults = document.createElement("div");
  createResults.classList.add("col-auto", "border", "bg-primary");
  createResults.textContent = "hippo"
  var handleCreationTemp = document.createElement("div")
  var handleCreationWind = document.createElement("div")
  var handleCreationHumidity = document.createElement("div")
  // need to create temp wind humidity 
  // need to append to create results
  individualResults.appendChild(createResults);
}

handleSearchButton.addEventListener("click", fetchWeather);

var currentCity = document.querySelector(".cityName");
var currentTemp = document.querySelector(".currentTemp");
var currentWind = document.querySelector(".currentWind");
var currentHumidity = document.querySelector(".currentHumidity");

function displayCurrentWeather(data) {
  console.log("Current data: ",data);
  currentCity.textContent = data.name;
  currentTemp.textContent = "Temp: " + data.main.feels_like + " °";
  currentWind.textContent = "Wind Speed: " + data.wind.speed + " mph";
  currentHumidity.textContent = "Humidity: " + data.main.humidity + "%";
}