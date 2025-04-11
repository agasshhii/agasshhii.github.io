let cityInput; 

document.addEventListener('DOMContentLoaded', () => {
    const timeDisplay = document.getElementById('current-time');
    const showTimeButton = document.getElementById('show-time');
    cityInput = document.getElementById('city-input'); 

    showTimeButton.addEventListener('click', () => {
        updateTime(timeDisplay);
        setInterval(() => updateTime(timeDisplay), 1000);
        
        greeting.displayGreeting();
        fetchWeatherData(); 
    });
});

function updateTime(displayElement) {
    const currentTime = new Date().toLocaleTimeString();
    displayElement.textContent = `Current time: ${currentTime}`;
}

const greeting = {
    getCurrentHour: function() {
        return new Date().getHours();
    },

    getGreeting: function() {
        const hour = this.getCurrentHour();
        if (hour < 12) {
            return 'Good morning, Mr. President.';
        } else if (hour < 18) {
            return 'Good afternoon!';
        } else {
            return 'Good evening!';
        }
    },

    displayGreeting: function() {
        const greetingMessage = this.getGreeting();
        document.getElementById('greeting').textContent = greetingMessage;
    }
};

async function fetchWeatherData() {
    const city = cityInput.value.trim(); 
    const API_KEY = 'df70668973919b429805617aa515ba5c'; 

    if (!city) {
        const weatherResult = document.getElementById('weatherResult');
        if (weatherResult) {
            weatherResult.innerHTML = `<p>Please enter the name of the city.</p>`; 
        }
        return; 
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('The city was not found'); 
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        const weatherResult = document.getElementById('weatherResult');
        if (weatherResult) {
            weatherResult.innerHTML = `<p>${error.message}</p>`; 
        }
    }
}

function displayWeather(data) {
    const { name, main, weather } = data;
    const weatherInfo = `
        <h2>Weather in ${name}</h2>
        <p>Temperature: ${main.temp} °C</p>
        <p>Condition: ${weather[0].description}</p>
    `;
    const weatherResult = document.getElementById('weatherResult');
    if (weatherResult) {
        weatherResult.innerHTML = weatherInfo;
    }
}
