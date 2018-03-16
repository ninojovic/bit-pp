const Movie = require("./Movie")
const Genre = require("./Genre")
const Program = require("./Program")

createMovie = (title, length, genre) => {
    const genreObject = new Genre(genre);
    return new Movie(title, genreObject, length);
}

createProgram = (date) => {
    return new Program(date);
}


module.exports = { createMovie, createProgram }