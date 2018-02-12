"use strict";
function returnLast(array, n) {
    var n = n || 1;
    var resultArr = [];
    var counter = n - 1;
    for (var i = array.length - 1; (counter < n && counter >= 0); i--) {
        resultArr[counter] = array[i];
        counter--;
    }
    return resultArr;
}

var randomArray = [7, 9, 0, -2];
console.log(returnLast(randomArray));
