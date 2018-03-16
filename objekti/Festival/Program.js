class Program {
    constructor(date) {
        this.date = new Date(date);
        this.listOfMovies = [];
        this.totalNumMovies = 0;
    }

    getData() {
        let result = "";
        let totalTime = 0;
        this.listOfMovies.forEach((element) => {
            result += `          ${element.getData()}\n`;
            totalTime += element.length;
        })

        let firstRow = `${this.date.getDate()}.${this.date.getMonth()}.${this.date.getFullYear()}, program duration ${totalTime} min\n`;
        result = firstRow + result;

        return result;
    }

    addMovie(movie) {
        this.listOfMovies.push(movie);
        this.totalNumMovies++;
    }
}

module.exports = Program