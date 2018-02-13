// Write a function to find the median element of array.
// In general, the median is at index (n-1)/2 if the number of elements in an array (n) is odd. 
// For a sorted array with an even number of elements, sum of the two elements in the middle are medians.
"use strict";

function sortArr(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                var temp;
                temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return arr;
}

function median(arr){
    var sortedArr = sortArr(arr);
    var arrEven = (arr.length % 2 === 0) ? true : false;
    console.log(sortedArr);

    if (!!arrEven) {
        var index1 = arr.length / 2;
        var index2 = arr.length / 2 - 1;
        return arr[index1] + arr[index2];
    } else {
        return arr[(arr.length-1)/2]
    }
}

console.log(median([345, 12, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213, 321]));



