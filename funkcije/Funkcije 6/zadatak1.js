// Write a function to count vowels in a provided string. If you are  not aware of indexOf function, try to use switch statement.
"use strict";

var isVowel = function (char) {
    var vowel = (char === "a") || (char === "o") || (char === "u") || (char === "i") || (char === "e");
    if (!!vowel) {
        return true;
    }
    return false;
}

function howManyVowels(string) {
    var counter = 0;
    for (var i = 0; i < string.length; i++){
        var element = string[i];
        if (!!isVowel(element)) {
            counter ++;
        }
    }
    return counter;
}

console.log(howManyVowels("How many vowels do i have?"));
