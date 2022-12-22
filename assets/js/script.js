/*🌞 🌧️ 🌨️ ☁️ emojis for forecast5days*/
var APIkey = "d47bf282954b0842d96677fee770a673"

var lat;

var lon;

var differentUrl = `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}`

var handleSearchButton = document.querySelector(".handleSearchButton");

let searchInput = document.getElementById("search");

var currentResults = document.querySelector(".currentResults");
console.log("current results: " + currentResults)

function fetchWeather(event) {
  event.preventDefault();
  console.log(searchInput.value);
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&units=imperial&appid=${APIkey}`)
    .then(function (response) {
      return response.json();
    })
    .then(function(data) {
      displayCurrentWeather(data)
    })
}
  // use to grab log and lat


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
  currentResults.appendChild(handleCreationTemp);
  currentResults.appendChild(handleCreationWind);
  currentResults.appendChild(handleCreationHumidity);
}

function displayCurrentWeather(data) {
  console.log("Today's weather", data);
  createResults.textContent = "Temp: " + data.main.temp;
  handleCreationTemp.textContent = "Today's temperature in " + data.name + ": " + data.main.temp;
  handleCreationWind = "Wind speed: " + data.wind.speed;
  handleCreationHumidity = "Humidity percentage: " + data.main.humidity + "%";
}

var wind = document.querySelector(".wind");

var temp = document.querySelector(".temp");

var humidity = document.querySelector(".humidity");

handleSearchButton.addEventListener("click", fetchWeather);
