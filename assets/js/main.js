const btnSearch = document.getElementById('btnSearch');
const inputMovie = document.getElementById("movie")

const getData = (keyword) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.themoviedb.org/3/search/movie?api_key=4d1fdc2276eab24af52302d46cdf40d5&language=en-US&query=" + keyword);

    xhr.onload = () => {
        const data = JSON.parse(xhr.responseText);
        console.log(data);
    };

    xhr.send();
}

btnSearch.addEventListener('click', () => {
    const input = inputMovie.value;
    getData(input);
});