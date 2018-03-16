class Festival {
    constructor (name) {
        this.name = name;
        this.listOfPrograms = [];
        this.numOfMovies = 0;
    }

    addProgram (program) {
        this.listOfPrograms.push(program);
        this.numOfMovies += program.totalNumMovies;
    }

    getData() {
        let result = "";
        this.listOfPrograms.forEach((element) => {
            result += `     ${element.getData()}`;
        });
        let firstLine = `${this.name} has ${this.numOfMovies} movies\n`;
        result = firstLine + result;
    
        return result;
    }
}



module.exports = Festival