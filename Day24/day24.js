const api_key = ''
// const city = 'london'

document.getElementById('search-button').addEventListener('click', () => {
    const city = document.getElementById('city-input').value.toLowerCase();
    // console.log(city);
    fetchWeatherData(city);
});

const fetchWeatherData = (city) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`)
        .then(response => response.json())
        .then(data => {
            fetchForecastData(city);
            displayWeatherData(data);
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        })
}

const fetchForecastData = (city) => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api_key}&units=metric`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        displayForecastData(data);
        expandContainer();
    })
    .catch(error => {
        console.log(error);
    })
}


function displayWeatherData(data) {
    const weatherInfo = document.getElementById('weather-info');
    const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    weatherInfo.innerHTML = `
        <h2>${data.name}</h2>
        <img src="${iconUrl}" alt="${data.weather[0].description}">
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Condition: ${data.weather[0].description}</p>
    `;
}

function displayForecastData(data) {
    const forecastInfo = document.getElementById('forecast-info');
    forecastInfo.innerHTML = '';
    for (let i = 0; i < data.list.length; i += 8) {
        const forecast = data.list[i];
        const date = new Date(forecast.dt * 1000);
        const iconUrl = `http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`;
        forecastInfo.innerHTML += `
            <div class="forecast-item">
                <p>${date.toDateString().slice(0, 3)}</p>
                <img src="${iconUrl}" alt="${forecast.weather[0].description}">
                <p>${forecast.main.temp} °C</p>
                <p>${forecast.weather[0].description}</p>
            </div>
        `;
    }
}

function expandContainer() {
    const container = document.getElementById('container');
    container.classList.add('expanded');
}