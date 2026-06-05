const API_KEY = 'add your key ';

const weatherDiv = document.querySelector('.weather');
const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('city');

searchBtn.addEventListener('click', () => {
  const city = cityInput.value.trim();

  fetchWeather(city);
});

function fetchWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.cod === '404' || data.cod === 404) {
        weatherDiv.innerHTML = `
        <div class="error">
          ❌  Please enter a valid city name.
        </div>
      `;
        return;
      }

      weatherDiv.innerHTML = `
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">

    <h2>${data.name}</h2>

    <h3>${data.main.temp}°C</h3>

    <p>${data.weather[0].main}</p>

    <div class="details">

        <div class="card">
            <p>Humidity</p>
            <h4>${data.main.humidity}%</h4>
        </div>

        <div class="card">
            <p>Wind</p>
            <h4>${data.wind.speed} m/s</h4>
        </div>

    </div>
`;
    })
    .catch((error) => {
      console.log(error);
    });
}

const themeToggle = document.getElementById('themeToggle');

if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
  themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  if (document.body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
    themeToggle.textContent = '☀️';
  } else {
    localStorage.setItem('theme', 'light');
    themeToggle.textContent = '🌙';
  }
});
