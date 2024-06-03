// obtengo con fetch
async function fetchWeather(city) {    
    const url = "https://api.openweathermap.org/data/2.5/weather";    
    const apiKey = "21e3195e9bfeb6879e788ec605b09ab0";    
    const units = "metric";    
    const lang = "es";
    const response = await fetch(`${url}?q=${city}&appid=${apiKey}&units=${units}&lang=${lang}`);
    const data = await response.json();

    return data;
}

// Función para actualizar la tarjeta con los datos del clima
async function updateWeatherCard(city) {
    const weatherData = await fetchWeather(city);
    console.log(weatherData);
    const cityWeather = document.getElementById(city)
    // Actualizar el elemento HTML con el nombre de la ciudad
    cityWeather.querySelector("#city").textContent = weatherData.name;
    cityWeather.querySelector("#temperature").textContent = weatherData.main.temp;
    cityWeather.querySelector("#feels_like").textContent = weatherData.main.feels_like;    
    cityWeather.querySelector("#weather").textContent = weatherData.weather[0].description;
    cityWeather.querySelector("#humidity").textContent = weatherData.main.humidity;
    cityWeather.querySelector("#windSpeed").textContent = weatherData.wind.speed;
    const iconCode = weatherData.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;
    // Actualizar el elemento HTML con el ícono del clima
    cityWeather.querySelector("#weatherIcon").src = iconUrl;
    // Establecer el atributo "alt" del ícono del clima con la descripción del clima
    cityWeather.querySelector("#weatherIcon").alt = weatherData.weather[0].description;
}
updateWeatherCard("Buenos Aires");
updateWeatherCard("Liverpool");
