import DataSource from '../data/data-source.js';

const main = () => {
    const searchElement = document.querySelector("#searchElement");
    const buttonSearchElement = document.querySelector("#searchButtonElement");
    const movieListElement = document.querySelector("#movieList");

    const onButtonSearchClicked = () => {
        DataSource.searchMovie(searchElement.value)
            .then(renderResult)
            .catch(fallbackResult)
    };

    const renderResult = results => {
        movieListElement.innerHTML = "";
        results.forEach(movie => {
            const {title, poster_path, overview, vote_average, release_date};
            const movieElement = document.createElement("div");
            movieElement.setAttribute("class", "club");

            movieElement.innerHTML = `
                <img class="poster-movie" src="${poster_path}" alt="Poster">
                <div class="movie-info">
                    <h2>${title}</h2>
                    <p>Release date : ${release_date}</p>
                    <p>Rating       : ${vote_average}</p>
                    <p>${overview}</p>
                </div>`;

            movieListElement.appendChild(movieElement);
        })
    };

    const fallbackResult = message => {
        movieListElement.innerHTML = "";
        movieListElement.innerHTML += `<h2 class="placeholder">${message}</h2>`
    };

    buttonSearchElement.addEventListener("click", onButtonSearchClicked);
};

export default main;