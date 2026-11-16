export class Movie {
  constructor(movieData) {
    this.title = movieData.title;
    this.director = movieData.director;
    this.year = movieData.year;
    this.score = movieData.score;
  }

  render() {
    const card = document.createElement("div");
    const isTopRated = this.score >= 8;

    card.className = `movie-card ${isTopRated ? "top-rated" : ""}`;

    card.innerHTML = `
      ${isTopRated ? '<span class="badge">★ Top Rated</span>' : ""}
      <h3>${this.title}</h3>
      <p><strong>Director:</strong> ${this.director}</p>
      <p><strong>Year:</strong> ${this.year}</p>
      <p><strong>Score:</strong> ${this.score}/10</p>
    `;

    return card;
  }
}
