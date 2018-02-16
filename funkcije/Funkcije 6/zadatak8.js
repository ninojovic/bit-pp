// Write a function to find the maximum and minimum elements. Function returns an array.
"use strict";

function maxAndMin(arr) {
    var newArray = filterNumArray(arr);
    var max = -Infinity;
    var min = Infinity;
    for (var i = 0; i < newArray.length; i++){
        var element = newArray[i];
        max = (element > max) ? element : max;
        min = (element < max) ? element : min;
    }
    return [max, min];
}

function isProperNumber(num) {
    var isNumber = typeof num === "number";
    var num = parseFloat(num, 10);
    if (isNumber && isFinite) {
        return true;
    }
    return false;
}

function filterNumArray(arr) {
    var newArr = [];
    var newIndex = 0;
    for (var i = 0; i < arr.length; i++){
        var element = arr[i];
        if (isProperNumber(element)) {
            newArr[newIndex] = element;
            newIndex++;
        }
    }
    return newArr;
}

var randomArr = [13,24,23,45,53,61, -32, 559, 1e+3];
console.log(maxAndMin(randomArr));