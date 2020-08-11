import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
    const etSearch = document.querySelector("search-bar");
    const movieList = document.querySelector("#movieList");

    const onBtnSearchClicked = () => {
        const dataSource = new DataSource(renderResult, fallbackResult);
        dataSource.filterMovie(etSearch.value);
    };

    const renderResult = results => {
        movieList.innerHTML = "";
        results.forEach(movie => {
            const {title, release_date, overview, poster_path, vote_average} = movie;
            const movieElement = document.createElement("div");
            movieElement.setAttribute("class", "movie");

            movieElement.innerHTML = `
                <img class="movie-poster" src="${poster_path}" alt="Poster">
                <div class="movie-info">
                    <h2>${title}</h2>
                    <p>Release Date : ${release_date}</p>
                    <p>Rating       : ${vote_average}</p>
                    <p>${overview}</p>
                </div>`;
            
            movieList.appendChild(movieElement);
        });
    };

    const fallbackResult = message => {
        movieList.innerHTML = "";
        movieList.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    };
  
    etSearch.clickEvent = onButtonSearchClicked;
}

export default main;