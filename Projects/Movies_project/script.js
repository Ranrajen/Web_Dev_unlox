const API_KEY = 'c20aa1e9';

const searchBtn = document.getElementById('searchBtn');
const movieDiv = document.querySelector('.movie');
const movieInput = document.getElementById('movieInput');
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

searchBtn.addEventListener('click', () => {
  const movieName = movieInput.value.trim();
//   console.log(movieName);
  if (movieName === '') {
    showError('Please enter a movie name.');
    return;
  }

  fetchMovie(movieName);
});

movieInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    searchBtn.click();
  }
});

async function fetchMovie(movieName) {
  try {
    movieDiv.innerHTML = `
      <p style="margin-top:20px;">
        Loading movie...
      </p>
    `;

    const response = await fetch(
      `https://www.omdbapi.com/?t=${movieName}&apikey=${API_KEY}`
    );

    const data = await response.json();
//   console.log(data);
    if (data.Response === 'False') {
      showError('Movie not found.');
      return;
    }

    displayMovie(data);
  } catch (error) {
    console.log(error);
    showError('Something went wrong. Please try again.');
  }
}



function displayMovie(data) {
  movieDiv.innerHTML = `
  
    <div class="movie-card">

      <img 
        src="${data.Poster}" 
        alt="${data.Title}"
      >

      <div class="movie-info">

        <h2>${data.Title}</h2>

        <p>
          <strong>📅 Year:</strong>
          ${data.Year}
        </p>

        <p>
          <strong>🎭 Genre:</strong>
          ${data.Genre}
        </p>

        <p>
          <strong>🎬 Director:</strong>
          ${data.Director}
        </p>

        <p>
          <strong>⭐ IMDb Rating:</strong>
          ${data.imdbRating}/10
        </p>

        <p>
          <strong>⏱ Runtime:</strong>
          ${data.Runtime}
        </p>

        <p>
          <strong>🌎 Language:</strong>
          ${data.Language}
        </p>

        <p>
          <strong>🎥 Actors:</strong>
          ${data.Actors}
        </p>

        <div class="plot">

          <strong>📖 Plot:</strong>

          <p>
            ${data.Plot}
          </p>

        </div>

      </div>

    </div>
  `;
}



function showError(message) {
  movieDiv.innerHTML = `
    <div class="error">
      ${message}
    </div>
  `;
}
