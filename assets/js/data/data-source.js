const DataSource = (onSuccess, onFailed) => {
    this.onSuccess = onSuccess;
    this.onFailed = onFailed;
}

DataSource.prototype.searchMovie = function (keyword) {
    const filteredMovies = getData(keyword);

    if (filteredMovies.length){
        this.onSuccess(filteredMovies);
    } else {
        this.onFailed(keyword + "is not found");
    }
};

export default DataSource;