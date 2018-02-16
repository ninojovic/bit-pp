"use strict";
"use strict";
function isPrime(num){
    var counter = 0;
    for (var i=1; i<=num;i++){
        if(num%i === 0) {
            counter++;
        }
    }
    if (counter < 3) {
        return console.log("Number "+num+" is PRIME!");
    } else {
        return console.log("Number "+num+" is NOT PRIME!")
    }
}

isPrime(23);