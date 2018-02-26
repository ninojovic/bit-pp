"use strict";

(function () {

    function Genre(name) {
        this.name = name;
    }

    Genre.prototype.getData = function () {
        var firstLetter = this.name.charAt(0);
        var lastLetter = this.name.charAt(this.name.length - 1);
        var result = firstLetter + lastLetter;
        return result.toUpperCase();
    }

    function Movie(title, genre, length) {
        this.title = title;
        this.genre = genre;
        this.length = length;
    }

    Movie.prototype.getData = function () {
        return this.title + ", " + this.genre.getData() + ", " + this.length + "min.";
    }

    function Program(date) {
        this.date = new Date(date);
        this.listOfMovies = [];
        this.totalNumMovies = 0;
    }

    Program.prototype.getData = function () {
        var result = "";
        var totalTime = 0;
        for (var i = 0; i < this.listOfMovies.length; i++) {
            result += "\t\t" + this.listOfMovies[i].getData() + "\n";
            totalTime += this.listOfMovies[i].length;
        }
        var firstRow = this.date.getDate() + "." + this.date.getMonth() + "." + this.date.getFullYear() + ", program duration " + totalTime + "min\n";
        result = firstRow + result;

        return result;
    }

    Program.prototype.addMovie = function (movie) {
        this.listOfMovies.push(movie);
        this.totalNumMovies++;
    }

    function Festival(name) {
        this.name = name;
        this.listOfPrograms = [];
        this.numOfMovies = 0;
    }

    Festival.prototype.addProgram = function (program) {
        this.listOfPrograms.push(program);
        this.numOfMovies += program.totalNumMovies;
    }

    Festival.prototype.getData = function () {
        var result = "";
        for (var i = 0; i < this.listOfPrograms.length; i++) {
            result += "\t" + this.listOfPrograms[i].getData();
        }
        var firstLine = this.name + " has " + this.numOfMovies + " movies\n";
        result = firstLine + result;
        
        return result;
    }

    function createMovie(title, length, genre) {
        var genreObject = new Genre(genre);
        return new Movie(title, genreObject, length);
    }

    function createProgram(date) {
        return new Program(date);
    }

    var myFestival = new Festival("My Movie Festival");

    var prog1 = createProgram(new Date(2018, 2, 19));
    var prog2 = createProgram(new Date(2018, 2, 20));

    var mov1 = createMovie("The Shawshank Redemption", 142, "Drama");
    var mov2 = createMovie("The Green Mile", 189, "Fantasy");
    var mov3 = createMovie("Gladiator", 175, "Action");
    var mov4 = createMovie("The Bourne Identity", 119, "Thriller");
    var mov5 = createMovie("King Arthur", 126, "Adventure");
    var mov6 = createMovie("Predestination", 143, "Mystery");
    var mov7 = createMovie("Easy A", 92, "Comedy");
    var mov8 = createMovie("Pirates Of the Caribbean", 143, "Adventure");

    prog1.addMovie(mov1);
    prog1.addMovie(mov2);
    prog1.addMovie(mov3);
    prog1.addMovie(mov4);

    prog2.addMovie(mov5);
    prog2.addMovie(mov6);
    prog2.addMovie(mov7);
    prog2.addMovie(mov8);

    myFestival.addProgram(prog1);
    myFestival.addProgram(prog2);
console.log(mov1);

    console.log(myFestival.getData());
})();