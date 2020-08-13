class MovieItem extends HTMLElement {
    set movie(movie) {
        this._movie = movie;
        this.render();
    }
  
    render() {
        this.innerHTML = `
            <img class="poster-movie" src="${this._movie.poster_path}" alt="Poster">
            <div class="movie-info">
                <h2>${this._movie.title}</h2>
                <p>Release date : ${this._movie.release_date}</p>
                <p>Rating       : ${this._movie.vote_average}</p> 
                <p>${this._movie.overview}</p>
            </div>`;
    }
 }
  
 customElements.define("movie-item", MovieItem);