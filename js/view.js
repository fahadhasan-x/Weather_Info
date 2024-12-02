const WeatherView = {
    displayWeather(data) {
        const weatherInfo = document.getElementById('weather-info');
        weatherInfo.innerHTML = `
            <h2>Weather for ${data.location.name}, ${data.location.country}</h2>
            <div class="weather-columns">
                <div class="weather-column">
                    <h3>Yesterday</h3>
                    <p>${data.forecast.forecastday[0].day.condition.text}</p>
                    <p>Average Temp: ${data.forecast.forecastday[0].day.avgtemp_c}°C</p>
                    <img src="https:${data.forecast.forecastday[0].day.condition.icon}" alt="Weather Icon">
                </div>
                <div class="weather-column">
                    <h3>Today</h3>
                    <p>${data.current.condition.text}</p>
                    <p>Current Temp: ${data.current.temp_c}°C</p>
                    <img src="https:${data.current.condition.icon}" alt="Weather Icon">
                </div>
                <div class="weather-column">
                    <h3>Tomorrow</h3>
                    <p>${data.forecast.forecastday[1].day.condition.text}</p>
                    <p>Average Temp: ${data.forecast.forecastday[1].day.avgtemp_c}°C</p>
                    <img src="https:${data.forecast.forecastday[1].day.condition.icon}" alt="Weather Icon">
                </div>
            </div>
        `;
    },
    showError(message) {
        alert(message);
    }
};
