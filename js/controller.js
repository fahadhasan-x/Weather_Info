const WeatherController = {
    init() {
        const searchButton = document.getElementById('search-button');
        searchButton.addEventListener('click', this.handleSearch);
    },
    async handleSearch() {
        const cityInput = document.getElementById('city-input').value;
        if (!cityInput) {
            WeatherView.showError('Please enter a city name!');
            return;
        }
        try {
            const data = await WeatherModel.fetchWeather(cityInput);
            WeatherView.displayWeather(data);
        } catch (error) {
            WeatherView.showError(error.message);
        }
    }
};

WeatherController.init();
