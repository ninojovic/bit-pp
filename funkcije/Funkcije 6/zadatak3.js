//Write a function that rotates a list by k elements.
//For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]
"use strict";

function rotateArr(arr, n) {
    var newArr = [];
    var newIndex = 0;

    for (var i = n; i < arr.length; i++){
        var element = arr[i];
        newArr[newIndex] = element;
        newIndex++;
        if (i === arr.length-1){
            for (var j = 0; j < n; j++){
                newArr[newIndex] = arr[j];
                newIndex++;
            }
        }
    }

    return newArr;
}

var randomArr = [1,2,3,4,5,6];

console.log(rotateArr(randomArr, 2));

