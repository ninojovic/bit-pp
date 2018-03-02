//MOVIE CREATION

function Movie(title, genre, duration) {
    this.title = title;
    this.genre = genre;
    this.duration = duration;
}
Movie.prototype.getData = function () {
    return this.title + ", " + this.genre + ", " + this.duration + "min";
}

var movieList = [];
var programList = [];
var festivalList = [];

function createMovie() {
    var movieTitle = document.querySelector("#title").value;
    var movieGenre = document.querySelector("select").value;
    var movieDuration = parseInt(document.querySelector("#duration").value);

    return new Movie(movieTitle, movieGenre, movieDuration);
}

document.getElementById("movieSubmit").addEventListener("click", function (event) {
    var movie = createMovie();
    var listItem = document.createElement("li");
    var firstOlList = document.querySelector("ol");
    var optionItem = document.createElement("option");
    var movieSelect = document.getElementById("selectMovie");
    optionItem.setAttribute("value", (movieList.push(movie)-1));
    optionItem.textContent = movie.title;
    listItem.textContent = movie.getData();
    movieSelect.appendChild(optionItem);
    firstOlList.appendChild(listItem);
});

//PROGRAM CREATION

function Program(date) {
    this.date = new Date(date);
    this.listOfMovies = [];
}

Program.prototype.getProgramDuration = function () {
    var programLength = 0;

    this.listOfMovies.forEach(function (movie) {
        programLength += movie.duration;
    });

    return programLength;
};

Program.prototype.addMovie = function (movie) {
    this.listOfMovies.push(movie);
};

Program.prototype.getData = function () {
    var date = this.date;
    var movies = this.listOfMovies;
    var programDuration = this.getProgramDuration();
    var dateStr = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();

    var outputStr = dateStr + ", program duration " + programDuration + "min\n";

    for (var i = 0; i < movies.length; i++) {
        var movie = movies[i];
        outputStr += "</br>" + "\t\t" + movie.getData() + "\n";
    }

    return outputStr;
};

function createProgram() {
    var date = document.querySelector("#programDate").value;
    return new Program(date);
}

document.getElementById("createProgram").addEventListener("click", function (event) {
    var program = createProgram();
    var listItem = document.createElement("li");
    var optionItem = document.createElement("option");
    var programSelect = document.getElementById("selectProgram");
    var programOlList = document.getElementsByTagName("ol")[1];
    listItem.textContent = program.getData();
    var programIndex = programList.push(program)-1;
    optionItem.textContent = program.getData();
    optionItem.value = programIndex;
    optionItem.setAttribute("value", programIndex);
    programOlList.appendChild(listItem);
    programSelect.appendChild(optionItem);
});

// ADD MOVIE

document.getElementById("movieAdder").addEventListener("click", function (event){
    var programListItem = document.createElement("li");
    var selectedMovieIndex = document.getElementById("selectMovie").value;
    var selectedMovie = movieList[selectedMovieIndex];
    var selectedProgramIndex = document.getElementById("selectProgram").value;
    var selectedProgram = programList[selectedProgramIndex];
    var programListElement = document.getElementsByTagName("ol")[1];
    var oldNode = programListElement.children[selectedProgramIndex];
    programListItem.innerHTML = selectedProgram.getData();
    selectedProgram.addMovie(selectedMovie);
    programListElement.replaceChild(programListItem, oldNode);
})

