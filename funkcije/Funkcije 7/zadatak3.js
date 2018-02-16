// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.

// Bonus: Accept floating point values for amount per day, and round the result to a round number.
"use strict";

function calculateSupply(age, amount){
    var maxAge = 90;
    var ageLeft = 90 - age;
    var daysLeft = ageLeft * 365;
    var supplyNeeded = parseInt(amount * daysLeft);
    return "You will need " + supplyNeeded + " to last you until the ripe old age of " + maxAge;
}

console.log(calculateSupply(27, 3));
console.log(calculateSupply(23, 5));
console.log(calculateSupply(30, 1));
