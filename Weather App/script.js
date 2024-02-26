const keyUrl = "beba6dfa7cb9285a644834e735c632ac";
const URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherImage = document.querySelector(".weather img");

async function checkWheather(city) {
  const response = await fetch(URL + city + `&appid=${keyUrl}`);
  var data = await response.json();
  var invalidWeather = document.querySelector(".invalid ");

  if (data.cod == 404 || searchBox.value == "" || searchBox.value == null) {
    invalidWeather.style.display = "block";
  } else {
    invalidWeather.style.display = "none";
    console.log(data);
    document.querySelector("#temp").innerHTML =
      Math.round(data.main.temp) + `°c`;
    document.querySelector("#country").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity;
    document.querySelector(".wind").innerHTML = data.wind.speed + `km/h`;

    if (data.weather[0].main == "Clouds") {
      weatherImage.src = "images/clouds.png";
    } else if (data.weather[0].main == "Smoke") {
      weatherImage.src = "images/snow.png";
    } else if (data.weather[0].main == "Clear") {
      weatherImage.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherImage.src = "images/mist.png";
    } else if (data.weather[0].main == "Rain") {
      weatherImage.src = "images/rain.png";
    } else {
      weatherImage.src = "images/clear.png";
    }

    document.querySelector(".weather").style.display = "block";
  }
}

searchBtn.addEventListener("click", () => {
  checkWheather(searchBox.value);
});
