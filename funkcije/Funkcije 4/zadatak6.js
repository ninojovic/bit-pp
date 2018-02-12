"use strict";
var randomArr = [2, 5, -2, 7, -2, 4, 2];

function isSymmetric(array){
    var symmetric;
    for (var i=0, j=array.length-1; i < array.length && j >= 0; i++, j--){
        if (array[i] !== array[j]){
            return "Not symmetric!";
        }
    }
    return "Symmetric";
}

console.log(isSymmetric(randomArr));
