(function () {

    class Genre {
        constructor(name) {
            this.name = name;
        }

        getData () {
            const letters = this.name[0] + this.name[this.name.length-1];
            return letters.toUpperCase();
        }
    }

    class Movie {
        constructor(title, genre, length) {
            this.title = title;
            this.genre = genre;
            this.length = length;
        }

        getData() {
            return `${this.title}, ${this.length}min, ${this.genre.getData()}`;
        }
    }

    class Program {
        constructor(date) {
            this.date = (new Date(date)).toDateString();
            this.listOfMovies = [];
            this.totalNumberOfMovies = 0;
        }

        addMovie (movie) {
            this.totalNumberOfMovies = this.listOfMovies.push(movie);
        }

        getDuration() {
            let result = 0;
            this.listOfMovies.forEach(({length}) => {result += length})
            return result;
        }

        getData () {
            return `${this.date}, program duration ${this.getDuration()}min
                ${this.listOfMovies.forEach(element => element.getData())}
                `;
        }
    }

    class Festival {
        constructor(name) {
            this.name = name;
            this.listOfPrograms = [];
            this.numberOfMovies = 0;
        }

        addProgram (program) {
            this.listOfPrograms.push(program);
        }
    
        getData() {
            return `${this.name} festival has ${this.listOfPrograms.length} movie titles
            ${this.listOfPrograms.forEach(element => element.getData())}`
        }
    }

    function createMovie (title, length, genre) {
        const newGenre = new Genre(genre)
        return new Movie (title, newGenre, length);
    }

    function createProgram (date) {
        return new Program(date);
    }

    const spiderman = createMovie("Spider-Man: Homecoming", 133, "Action");
    const planetOfTheApes = createMovie("War for the Planet of the apes", 140, "Drama");
    const darkTower = createMovie("The Dark Tower", 95, "Western");
    const deadpool = createMovie("Deadpool", 108, "Comedy");

    const program1 = createProgram("2017, 10, 29");
    const program2 = createProgram("2017, 10, 28");

    program1.addMovie(spiderman);
    program1.addMovie(planetOfTheApes);
    program1.addMovie(darkTower);

    program2.addMovie(deadpool);

    const weekend = new Festival("Weekend");

    weekend.addProgram(program1);
    weekend.addProgram(program2);

    console.log(weekend.getData());

})();