function DataSource(onSuccess, onFailed) {
    this.onSuccess = onSuccess;
    this.onFailed = onFailed;
}

DataSource.prototype.searchMovie = function (keyword) {
    var filteredMovies = movies.filter(function (movie) {
        return movie.name
    })
}