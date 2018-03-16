const Festival = require("./Festival");
const {createProgram, createMovie} = require("./data");

const myFestival = new Festival("My Movie Festival");

const prog1 = createProgram(new Date(2018, 2, 19));
const prog2 = createProgram(new Date(2018, 2, 20));
const mov1 = createMovie("The Shawshank Redemption", 142, "Drama");

const mov2 = createMovie("The Green Mile", 189, "Fantasy");
const mov3 = createMovie("Gladiator", 175, "Action");
const mov4 = createMovie("The Bourne Identity", 119, "Thriller");
const mov5 = createMovie("King Arthur", 126, "Adventure");
const mov6 = createMovie("Predestination", 143, "Mystery");
const mov7 = createMovie("Easy A", 92, "Comedy");
const mov8 = createMovie("Pirates Of the Caribbean", 143, "Adventure");

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

console.log(myFestival.getData());