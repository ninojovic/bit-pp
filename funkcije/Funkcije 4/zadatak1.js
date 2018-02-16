"use strict";
var givenArr = [5, -4.2, 3, 7]

function isInArr(num, array){
    var floatEll;
    num = parseFloat(num);
    for (var i = 0; i < array.length; i++){
        floatEll = parseFloat(array[i]);
        if (floatEll === num){
            return true;
        }
    }
    return false;
}


console.log(isInArr(-4.2,givenArr));
