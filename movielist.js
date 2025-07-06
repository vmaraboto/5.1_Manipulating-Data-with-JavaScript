// create array for movie names
let arrMovies = [];

// create function that adds movies to array
function addMovie() {
    // create shortcut to txtMovieName element in html
    let txtMovieName = document.getElementById("txtMovieName");
    // get value of txtMovieName
    let movieName = txtMovieName.value;

    // check if movieName is not blank
    if (movieName != "") {
        // add value into array
        arrMovies.push(movieName);
        // reset txtMovieName value
        txtMovieName.value = "";
        // call display function
        displayMovieList();
    }
}

// create a function that displays the list of movies onto the screen for the user
function displayMovieList() {
    // create shortcut to divMovies, where movie list is going to be displayed
    let divMovies = document.getElementById("divMovies");

    // sorts the list of movies alphabetically
    arrMovies.sort();
    // adds a line break in between each movie title
    divMovies.innerHTML = arrMovies.join("<BR>");
}

// create a function that clears the movie list
function resetList() {
    // resets the array holding the movie values
    arrMovies = [];
    // call display function
    displayMovieList();
}