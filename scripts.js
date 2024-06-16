
    document.getElementById('searchBtn').addEventListener('click', async function() {
        const city = document.getElementById('city').value;
        const apiKey = '571fc58f34863c7241dcf9521af2a1af ';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=cz`;
    
        try {
            const data = await getWeatherData(url);
            displayWeatherData(data);
        } catch (error) {
            alert('Chyba při načítání dat');
        }
    });
    
    async function getWeatherData(url) {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Chyba při načítání dat');
        }
        return response.json();
    }
    
    function displayWeatherData(data) {
        const results = document.getElementById('results');
        results.innerHTML = `
            <div class="weather">
                <h2>${data.name}</h2>
                <p>Teplota: ${data.main.temp}°C</p>
                <p>Popis: ${data.weather[0].description}</p>
                <p>Vlhkost: ${data.main.humidity}%</p>
                <p>Rychlost větru: ${data.wind.speed} m/s</p>
            </div>
        `;
    }
    