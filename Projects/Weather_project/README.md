--- Weather App---

A modern Weather Application built using HTML, CSS, and JavaScript that fetches real-time weather information using the OpenWeather API.

-- Features--
-Search weather by city name
-Real-time weather information
-Temperature display in Celsius
-Humidity information
-Wind speed information
-Weather condition icons
-Glassmorphism UI Design
-Dark/Light Mode Toggle
-Responsive Design
-Error handling for invalid city names

--Technologies Used --
-HTML5
-CSS3
-JavaScript (ES6+)
-OpenWeather API

-- Project Structure--
Weather-App/
│
├── index.html
├── style.css
├── script.js
└── README.md

---

---

## Getting Started

Step 1: Clone Repository
git clone https://github.com/your-username/weather-app.git

Step 2: Open Project

Open the project folder in VS Code.

cd weather-app
Step 3: Run Application

Simply open index.html in your browser.

-------IMP-----
OpenWeather API Setup

Step 1: Create OpenWeather Account
Visit https://openweathermap.org
Click Sign Up
Create your account
Verify your email address

Step 2: Login

After verification:

Click Sign In
Enter your credentials
Login to your account
Step 3: Generate API Key
Go to My Account
Select API Keys
Create a new API key

Example:

MyWeatherAppKey
Copy the generated API key

Example:

const API_KEY = "YOUR_API_KEY";

Step 4: Replace API Key

Open script.js

Replace:

const API_KEY = "YOUR_API_KEY";

with

const API_KEY = "YOUR_GENERATED_API_KEY";
API Endpoint Used
https://api.openweathermap.org/data/2.5/weather?q={CITY_NAME}&units=metric&appid={API_KEY}

Example:

https://api.openweathermap.org/data/2.5/weather?q=Pune&units=metric&appid=YOUR_API_KEY
