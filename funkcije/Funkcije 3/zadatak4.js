"use strict";
function reverseNumber(num) {
    var stringNum = num + "";
    var reversedString = "";
    
    for (var i = stringNum.length - 1; i >= 0; i--) {
        reversedString += stringNum[i]
    }

    return parseInt(reversedString, 10);
}

console.log(reverseNumber(41232));
