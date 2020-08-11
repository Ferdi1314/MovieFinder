import '../component/movie-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
    const etSearch = document.querySelector("search-bar");
    const movieList = document.querySelector("movie-list");

    const onBtnSearchClicked = () => {
        const dataSource = new DataSource(renderResult, fallbackResult);
        dataSource.filterMovie(etSearch.value);
    };

    const renderResult = results => {
        movieList.movies = results;
    };

    const fallbackResult = message => {
        movieList.renderError(message);
    };
  
    etSearch.clickEvent = onBtnSearchClicked;
}

export default main;