const btnSearch = document.getElementById('btnSearch');
const inputMovie = document.getElementById("movie");

const sendHttpRequest = (method, url) => {
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);

        xhr.responseType = 'json';

        xhr.onload = () => {
            resolve(xhr.response);
        };

        xhr.send();
    })

    return promise;
}

const getData = (keyword) => {
    sendHttpRequest("GET", "https://api.themoviedb.org/3/search/movie?api_key=4d1fdc2276eab24af52302d46cdf40d5&language=en-US&query=" + keyword).then(responseData => {
        console.log(responseData);
    })
}

btnSearch.addEventListener('click', () => {
    const input = inputMovie.value;
    getData(input);
});