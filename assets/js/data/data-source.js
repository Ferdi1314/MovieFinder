class DataSource{
    static searchMovie(keyword){
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=4d1fdc2276eab24af52302d46cdf40d5&language=en-US&query=${keyword}`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.results){
                return Promise.resolve(responseJson.results);
            } else {
                return Promise.reject(`${keyword} is not found`);
            }
        })
    }
}

export default DataSource;