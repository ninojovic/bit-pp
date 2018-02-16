// Why pay a fortune teller when you can just program your fortune yourself?
// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.
"use strict";

function tellFortune(num, name, geoLoc, job){
    console.log("You will be a " + job + " in " + geoLoc + ", and married to " + name + " with " + num + " kids.");
}

tellFortune(5, "Cleopatra", "Egypt", "slave");
tellFortune(3, "Shakira", "Columbia", "salsa dancer");
tellFortune(12, "Angela Merkel", "Germany", "nazi");