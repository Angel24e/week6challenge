/*🌞 🌧️ 🌨️ ☁️ emojis for forecast5days*/
var APIkey = "d47bf282954b0842d96677fee770a673"

var url = `http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&units=imperial&appid=${APIkey}`;

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

var searchInput = document.querySelector(".search")

var city1 = document.querySelector(".city1")
var city2 = document.querySelector(".city2")
var city3 = document.querySelector(".city3")
var city4 = document.querySelector(".city4")
var city5 = document.querySelector(".city5")

var emoji1 = document.querySelector(".emoji1")
var emoji2 = document.querySelector(".emoji2")
var emoji3 = document.querySelector(".emoji3")
var emoji4 = document.querySelector(".emoji4")
var emoji5 = document.querySelector(".emoji5")

var temp1 = document.querySelector(".temp1")
var temp2 = document.querySelector(".temp2")
var temp3 = document.querySelector(".temp3")
var temp4 = document.querySelector(".temp4")
var temp5 = document.querySelector(".temp5")

var precipitation1 = document.querySelector(".precipitation1")
var precipitation2 = document.querySelector(".precipitation2")
var precipitation3 = document.querySelector(".precipitation3")
var precipitation4 = document.querySelector(".precipitation4")
var precipitation5 = document.querySelector(".precipitation5")

function handleSearch() {
  city1.textContent = "banana"
  city2.textContent = "banana"
  city3.textContent = "banana"
  city4.textContent = "banana"
  city5.textContent = "banana"

  emoji1.textContent = "banana"
  emoji2.textContent = "banana"
  emoji3.textContent = "banana"
  emoji4.textContent = "banana"
  emoji5.textContent = "banana"

  temp1.textContent = "temp is banana"
  temp2.textContent = "temp is banana"
  temp3.textContent = "temp is banana"
  temp4.textContent = "temp is banana"
  temp5.textContent = "temp is banana"

  precipitation1.textContent = "raining banana"
  precipitation2.textContent = "raining banana"
  precipitation3.textContent = "raining banana"
  precipitation4.textContent = "raining banana"
  precipitation5.textContent = "raining banana"

}

handleSearch();