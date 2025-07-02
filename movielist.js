let arrMovies = [];

function addMovie() {
    let txtMovieName = document.getElementById("txtMovieName");
    let movieName = txtMovieName.value;

    if (movieName != "") {
        arrMovies.push(movieName);
        txtMovieName.value = "";
        displayMovieList();
    }
}

function displayMovieList() {
    let divMovies = document.getElementById("divMovies");

    arrMovies.sort();
    divMovies.innerHTML = arrMovies.join("<BR>");
}

function resetList() {
    arrMovies = [];
    displayMovieList();
}