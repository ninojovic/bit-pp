// Write a function that takes a list of strings and prints them, one per line, in a rectangular frame.:
// For example the list ["Hello", "World", "in", "a", "frame"] gets printed as:
//      *********
//      * Hello *
//      * World *
//      * in    *
//      * a     *
//      * frame *
//      *********
"use strict";

function longestString(arr){
    var longestStr = arr[0].length;
    for (var i = 1; i < arr.length; i++){
        longestStr = (longestStr < arr[i].length) ? arr[i].length : longestStr;
    }
    return longestStr;
}


function sqrStars(arr) {
    var starsString = "";
    var row = arr.length + 2;
    var col = longestString(arr) + 4;
    for (var i = 0; i < row; i++) {
        starsString += "\n";
        for (var j = 0; j < col; j++) {
            if (i === 0 || i === (row - 1)) {
                starsString += "*";
            } else {
                if (j === 0 || j === (col - 1)) {
                    starsString += "*";
                } else {
                    if ((arr[i-1][j-2] === undefined) || (j === 1 && (i !== 0 || i !== arr.length))){
                        starsString += " ";
                    } else {
                        starsString += arr[i-1][j-2];
                    }
                }
            }
        }
    }
    return starsString;
}

var randomArr = ["I'm", "The", "Dumbest", "Man", "Ever", "Born"]

console.log(sqrStars(randomArr));
