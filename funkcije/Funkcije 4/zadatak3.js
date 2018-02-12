"use strict";
var randomArr = [4, 2, 2, -1, 6];

function minOfArr(array){
    var isMin = 0;
    var indexOfMin = 0;
    var result = "";
    for (var i = 0; i < array.length; i++){
        if (array[i] < isMin){
            isMin = array[i];
            indexOfMin = i + 1;
        }
    }
    result = "Minimum of a given array is " + isMin + " and it's index is " + indexOfMin;
    return result;
}

console.log(minOfArr(randomArr));
