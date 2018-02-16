"use strict";
var randomArr = [4, 2, 2, -1, 6];

function firstAfterMin(array){
    var isMin = Infinity;
    var isSecondMin = Infinity;
    var newArr = [];
    var result = "";
    for (var i = 0; i < array.length; i++){
        if (array[i] < isMin){
            isMin = array[i];
        }
    }
    for (var i=0; i < array.length; i++){
        if ((array[i] < isSecondMin) && (array[i] !== isMin)){
            isSecondMin = array[i];
        }
    }
    result = "Second largest number of a given array is " + isSecondMin;
    return result;
}

console.log(firstAfterMin(randomArr));
