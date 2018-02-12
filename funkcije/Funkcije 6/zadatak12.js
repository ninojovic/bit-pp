// Write a function to find the average of N elements. Make the function flexible to receive dynamic number or parameters.
"use strict";

function getAverage(){
    var sum = 0;
    var average;
    for (var i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    average = sum/arguments.length;
    return average;
}

console.log(getAverage(15, 30, 45, 12));
