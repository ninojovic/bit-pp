// Write a function that combines two arrays by alternatingly taking elements.
// [‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3]
"use strict";

function intertwineArr(arr1, arr2) {
    var newArr = [];
    var newIndex = 0;
    for (var i = 0; i < arr1.length; i++){
        newArr[newIndex] = arr1[i];
        newIndex++;
        newArr[newIndex] = arr2[i];
        newIndex++
    }
    return newArr;
}

var stringArr = ['a','b','c'];
var numberArr = [1,2,3];

console.log(intertwineArr(stringArr, numberArr));
