// Write a function to find the element that occurs most frequently.
"use strict";

function mostFreq(array) {
    var noDoublesArr = [];
    var newIndex = 0;
    var unique = false;
    var mostFreq = "0";
    var appereances = "0";
    var result = "";

    for (var i = 0; i < array.length; i++) {     // prolazimo kroz dati array i proveravamo da li je element jedinstven, ukoliko jeste, smestamo ga u "unique" array
        var j = 0;
        do {
            if (noDoublesArr[j] === array[i]) {
                unique = false;
                break;
            } else {
                unique = true;
            }
            j++;
        } while (j < noDoublesArr.length);

        if (unique) {
            noDoublesArr[newIndex] = array[i];
            newIndex++;
        }
    }

    function timesAppear(value, givenArr) {      // funkcija koja proverava koliko se puta prosledjeni element pojavljuje u datom array-u
        var counter = 0;
        for (var i = 0; i < givenArr.length; i++) {
            if (value === givenArr[i]) {
                counter++;
            }
        }
        return counter;
    }

    for (var i = 0; i < noDoublesArr.length; i++) {              // prolazimo kroz sve elemente "unique" array-a i pozivamo gore pomenutu funkciju
        appereances = timesAppear(noDoublesArr[i], array)       // prvi argument je trenutni element "unique" array-a 
        if (appereances > mostFreq) {                            // dok je drugi prosledjeni array iz glavne funkcije
            mostFreq = noDoublesArr[i];
        }
    }
    result = "Most frequent element is " + "\"" + mostFreq + "\" !";
    return result;

}

var randomArray = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

console.log(mostFreq(randomArray));

