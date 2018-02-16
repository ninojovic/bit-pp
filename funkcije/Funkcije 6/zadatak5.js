// Write a program that prints a multiplication table for numbers up to 12.
"use strict"

function multiplicateTo(n) {
    for (var i = 1; i < n; i++){
        var row = "";
        for (var j = 1; j < n; j++) {
            var result = i * j ;
            row += i + " * " + j + " = " + result + "\t\t";
        }
        console.log(row);
    }
}

multiplicateTo(12);