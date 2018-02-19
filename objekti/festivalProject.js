"use strict";
(function (){

    function Genre(name) {
        this.name = name;
        this.shortName = (function (){
            return (name[0] + name[name.length-1]).toUpperCase();
        })();
    }

    function Movie(title, genre, length) {
        this.title = title;
        this.genre = new Genre(genre);
        this.length = length;
        this.getData = function () {
            return this.title + ", " + this.length + "min, " + this.genre.shortName;
        }
    }

    function Program(yyyy,mm,dd) {
        this.unformatedDate = new Date(yyyy,mm,dd);
        this.date = this.unformatedDate.toDateString()
        this.listOfMovies = [];
        this.numberOfMovies = 0;
        this.addMovie = function (movie){
            this.numberOfMovies++;
            return this.listOfMovies.push(movie);
        }
        this.removeLastMovie = function (movie){
            this.numberOfMovies--;
            return this.listOfMovies.pop();
        }
        this.getData = function (){
            var totalLen = 0;
            var moviesInfo = "";
            for (var i = 0; i < this.listOfMovies.length; i++){
                var movie = this.listOfMovies[i];
                totalLen += movie.length;
                moviesInfo += "\t\t" + movie.getData() + "\n";
            }
            return this.date + ", program duration " + totalLen + "min \n" + moviesInfo; 
        }

    }

    function Festival(name) {
        this.name = name;
        this.listOfPrograms = [];
        this.numberOfMovies = 0;
        this.addProgram = function (program) {
            this.listOfPrograms.push(program);
            this.numberOfMovies += program.numberOfMovies;
        }
        this.getData = function () {
            var allPrograms = "";
            for (var i = 0; i < this.listOfPrograms.length; i++){
                var program = this.listOfPrograms[i];
                allPrograms += "\t" + program.getData();
            }
            return this.name + " festival has " + this.numberOfMovies + " movie titles\n" + allPrograms;
        }
    }

    var spiderman = new Movie("Spiderman", "Action", 130);
    var neighbours = new Movie("Neighbours", "Comedy", 100);
    var stargate = new Movie("Stargate", "SciF", 150);

    var program1 = new Program(2017,11,5);
    program1.addMovie(spiderman);
    program1.addMovie(stargate);
    program1.addMovie(spiderman);

    var program2 = new Program(2017,11,5);
    program2.addMovie(neighbours);

    var weekendFest = new Festival("Weekend");
    weekendFest.addProgram(program1);
    weekendFest.addProgram(program2);

    console.log(weekendFest.getData());
    
})();