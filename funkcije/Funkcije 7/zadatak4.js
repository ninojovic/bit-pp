// It's hot out! Let's make a converter based on the steps here.

// Create a function called celsiusToFahrenheit:
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".

// Create a function called fahrenheitToCelsius:
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."
"use strict";

function centigradeToFahrenheit(num){
    var f =  num * 1.8 + 32;
    return num + "°C is " + f + "°F";
}

function fahrenheitToCelsius(num){
    var c =  parseInt((num - 32) * (5/9));
    return num + "°F is " + c + "°C";
}
console.log(centigradeToFahrenheit(28));
console.log(fahrenheitToCelsius(82));
