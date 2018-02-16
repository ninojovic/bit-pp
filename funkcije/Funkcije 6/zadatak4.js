// Write a function that takes a number and returns array of its digits.
"use strict";

function numToArr(num) {
    var stringNum = "" + num;
    var newArr = [];

    for (var i = 0; i < stringNum.length; i++) {
        var element = stringNum[i];
        newArr[i] = element;
    }

    return newArr;
}

console.log(numToArr(1231231));
