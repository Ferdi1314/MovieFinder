class MovieItem extends HTMLElement {
    set movie(movie) {
        this._movie = movie;
        this.render();
    }
  
    render() {
        this.innerHTML = `
            <img class="movie-poster" src="${poster_path}" alt="Poster">
            <div class="movie-info">
                <h2>${title}</h2>
                <p>Release Date : ${release_date}</p>
                <p>Rating       : ${vote_average}</p>
                <p>${overview}</p>
            </div>`;
    }
}

customElements.define("movie-item", MovieItem);