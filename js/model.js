const WeatherModel = {
    apiKey: '793cda37426640f8a2863446240212', // Replace with your API key
    async fetchWeather(city) {
        const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${this.apiKey}&q=${city}&days=3`;
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error('City not found');
        return await response.json();
    }
};
