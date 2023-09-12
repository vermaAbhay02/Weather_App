const apikey = "b1a9674cac0b6c6b66892c16dec7ab85";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const input = document.querySelector(".searchBox input");

const searchButton = document.querySelector(".searchBox button");

const icon = document.querySelector(".icon");

const cityName = document.querySelector(".city");

const temperature = document.querySelector(".tempe");

const humidity = document.querySelector(".humidity");

const windSpeed = document.querySelector(".wind");

async function checkWeather(city) {

  const response = await fetch(apiurl + city + `&appid=${apikey}`);

  let data = await response.json();

  console.log(data);

  cityName.innerHTML = data.name;
  temperature.innerHTML = Math.round(data.main.temp) + "°C";
  humidity.innerHTML = "Humidity: " + data.main.humidity + "%";
  windSpeed.innerHTML = "Wind: " + data.wind.speed + "km/h";

  if (data.weather[0].main === "Clouds") {
    icon.src = "images/clouds.png";
  } else if (data.weather[0].main === "Clear") {
    icon.src = "images/clear.png";
  } else if (data.weather[0].main === "Rain") {
    icon.src = "images/rain.png";
  } else if (data.weather[0].main === "Drizzle") {
    icon.src = "images/drizzle.png";
  } else if (data.weather[0].main === "Mist") {
    icon.src = "images/mist.png";
  }
}

searchButton.addEventListener("click", () => {
  checkWeather(input.value);
});
