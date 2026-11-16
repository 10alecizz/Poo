import { Movie } from "./Movie.js";

async function init() {
  try {
    const response = await fetch("movies.json");
    const moviesData = await response.json();
    const container = document.getElementById("movie-container");

    moviesData.forEach((movieData) => {
      const movie = new Movie(movieData);
      container.appendChild(movie.render());
    });
  } catch (error) {
    console.error("Error loading movies:", error);
  }
}

document.addEventListener("DOMContentLoaded", init);
