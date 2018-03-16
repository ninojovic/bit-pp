class Movie {
    constructor(title, genre, length) {
        this.title = title;
        this.genre = genre;
        this.length = length;
    }
    getData () {
        return `${this.title}, ${this.genre.getData()}, ${this.length} min.`;
    }
}


module.exports = Movie