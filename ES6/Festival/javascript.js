//MOVIE CREATION

function Movie(title, genre, duration) {
    this.title = title;
    this.genre = genre;
    this.duration = duration;
}
Movie.prototype.getData = function () {
    return `${this.title}, ${this.genre}, ${this.duration} min`;
}

const movieList = [];
const programList = [];
const festivalList = [];

function createMovie() {
    const movieTitle = document.querySelector("#title").value;;
    const movieGenre = document.querySelector("select").value;
    const movieDuration = parseInt(document.querySelector("#duration").value);

    return new Movie(movieTitle, movieGenre, movieDuration);
}

document.getElementById("movieSubmit").addEventListener("click", function (event) {
    let movie = createMovie();
    let listItem = document.createElement("li");
    let firstOlList = document.querySelector("ol");
    let optionItem = document.createElement("option");
    let movieSelect = document.getElementById("selectMovie");

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
    let programLength = 0;

    this.listOfMovies.forEach(function (movie) {
        programLength += movie.duration;
    });

    return programLength;
};

Program.prototype.addMovie = function (movie) {
    this.listOfMovies.push(movie);
};

Program.prototype.getData = function () {
    let date = this.date;
    let movies = this.listOfMovies;
    let programDuration = this.getProgramDuration();
    let dateStr = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;

    let outputStr =`${dateStr}, program duration ${programDuration} min
    `;

    for (let i = 0; i < movies.length; i++) {
        let movie = movies[i];
        outputStr += `/n        ${movie.getData()}`;
    }

    return outputStr;
};

function createProgram() {
    const date = document.querySelector("#programDate").value;
    return new Program(date);
}

document.getElementById("createProgram").addEventListener("click", function (event) {
    let program = createProgram();
    let listItem = document.createElement("li");
    let optionItem = document.createElement("option");
    let programSelect = document.getElementById("selectProgram");
    let programOlList = document.getElementsByTagName("ol")[1];
    listItem.textContent = program.getData();
    let programIndex = programList.push(program)-1;
    optionItem.textContent = program.getData();
    optionItem.value = programIndex;
    optionItem.setAttribute("value", programIndex);
    programOlList.appendChild(listItem);
    programSelect.appendChild(optionItem);
});

// ADD MOVIE

document.getElementById("movieAdder").addEventListener("click", function (event){
    let programListItem = document.createElement("li");
    let selectedMovieIndex = document.getElementById("selectMovie").value;
    let selectedMovie = movieList[selectedMovieIndex];
    let selectedProgramIndex = document.getElementById("selectProgram").value;
    let selectedProgram = programList[selectedProgramIndex];
    let programListElement = document.getElementsByTagName("ol")[1];
    let oldNode = programListElement.children[selectedProgramIndex];
    programListItem.innerHTML = selectedProgram.getData();
    selectedProgram.addMovie(selectedMovie);
    programListElement.replaceChild(programListItem, oldNode);
})

