let cityName = prompt("Enter your city");
console.log(cityName);
fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=5d066958a60d315387d9492393935c19`
)
  
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
    let city = document.querySelector(".city");
    city.textContent = json.name;
    let temperature = document.querySelector(".temperature");
    temperature.textContent = json.main.temp;
    let pressure = document.querySelector(".pressure");
    pressure.textContent = json.main.pressure;
    let description = document.querySelector(".description");
    let descriptionData = json.weather.map((data) => data.description);
    description.textContent = descriptionData;
    let humidity = document.querySelector(".humidity");
    humidity.textContent = json.main.humidity;
    let windSpeed = document.querySelector(".wind-speed");
    windSpeed.textContent = json.wind.speed;
    let windDirection = document.querySelector(".wind-direction");
    windDirection.textContent = json.wind.deg;
    let icon = document.querySelector(".icon");
    let iconAddress = json.weather.map((data) => data.icon);
    icon.setAttribute(
      "src",
      `https://openweathermap.org/img/w/${iconAddress}.png`
    );
  });
