// Write a function to find all the numbers greater than the average.
"use strict";

function getAverage(arr){
    var sum = 0;
    var average;
    for (var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    average = sum / arr.length;
    return average;
}

function aboveAverage(arr){
    var average = getAverage(arr);
    var newArr = [];
    var newIndex = 0;
    
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > average){
            newArr[newIndex] = arr[i];
            newIndex++;
        }
    }
    return newArr;
}

var randomArr = [15, 32, 42, 22];

console.log(aboveAverage(randomArr));
