"use strict";
function perfectNum(num){
    var sum = null;
    var perfect = false;
    for(var i = 1; i < num; i++){
        if (num%i === 0) {
            sum += i;
        }
    }
    perfect = (sum === num) ? true : false;
    return perfect;
}

console.log(perfectNum(8128));
