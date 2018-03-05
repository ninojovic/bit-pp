var dataModule = (function (){

    var globalData = {
        listOfMovies: [],
        listOfPrograms: [],
    }

    function Movie(title, length, genre){
        this.title = title;
        this.length = parseInt(length);
        this.genre = genre;
    }

    Movie.prototype.getData = function (){
        return this.title + ", duration: " + this.length + ", " + this.genre;
    }

    function Program(date){
        this.date = new Date(date);
        this.formatedDate = this.date.getDate() + "." + (this.date.getMonth()-1) + "." + this.date.getFullYear();
        this.listOfMovies = [];
    }

    Program.prototype.getProgramDuration = function (){
        var result = 0;
        this.listOfMovies.forEach(function (elem){
            result += elem.length;
        })
        return result || "TBA";
    }

    Program.prototype.addMovieToList = function (movie){
        if (this.listOfMovies.containsElement(movie)){
            return false;
        }
        this.listOfMovies.push(movie);
        return true;
    }

    Program.prototype.getData = function (){
        return this.formatedDate + ", program duratio: " + this.getProgramDuration();
    }

    function addMovieToList (title, length, genre) {
        var newMovie = createMovie(title, length, genre);
        if (globalData.listOfMovies.containsElement(newMovie)){
            return false;
        }
        var newMovieIndex = globalData.listOfMovies.push(newMovie)-1;

        return [newMovie, newMovieIndex];
    }

    function addProgramToList (date) {
        var newProgram = createProgram(date);
        if (globalData.listOfPrograms.containsElement(newProgram)){
            return false;
        }
        var newProgramIndex = globalData.listOfPrograms.push(newProgram)-1;

        return [newProgram, newProgramIndex];
    }

    function createMovie(title, length, genre){
        return new Movie(title, length, genre);
    }

    function createProgram(date){
        return new Program(date);
    }

    function getMovieFromList(index){
        return globalData.listOfMovies[index];
    }

    function getProgramFromList(index){
        return globalData.listOfPrograms[index];
    }

    var dataToExpose = {
        addMovieToList: addMovieToList,
        addProgramToList: addProgramToList,
        getProgramFromList: getProgramFromList,
        getMovieFromList: getMovieFromList,
    }

    return dataToExpose;
})();