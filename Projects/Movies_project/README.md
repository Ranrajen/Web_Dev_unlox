---Movie Search App---

A modern Movie Search Application built using HTML, CSS, and JavaScript that fetches real-time movie information using the OMDb API.

--Features--
•	Search movies by title
•	Real-time movie information
•	Movie poster display
•	IMDb rating information
•	Genre information
•	Runtime information
•	Director information
•	Language information
•	Plot summary display
•	Glassmorphism UI Design
•	Dark/Light Mode Toggle
•	Responsive Design
•	Error handling for invalid movie names

---

---

Technologies Used
• HTML5
• CSS3
• JavaScript
• OMDb API

Project Structure
Movie-Search-App/
│
├── index.html
├── style.css
├── script.js
└── README.md

---

## Getting Started

Step 1: Clone Repository
git clone https://github.com/your-username/movie-search-app.git
Step 2: Open Project
Open the project folder in VS Code.
cd movie-search-app
Step 3: Run Application
Simply open index.html in your browser.

---

## IMP - OMDb API Setup

Visit:
https://www.omdbapi.com/
Click on:
API Key

Step 2: Request API Key
Fill in the required details:
Select:
FREE Account
Submit the form.

Step 3: Verify Email
Check your email inbox.
Click the verification link received from OMDb.

Step 4: Copy API Key
Open script.js and paste the api key
const API_KEY = "YOUR_API_KEY";

API Endpoint Used
https://www.omdbapi.com/?t={MOVIE_NAME}&apikey={API_KEY}
