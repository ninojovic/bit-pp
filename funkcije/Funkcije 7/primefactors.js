// 600851475143
// Math.sqrt();

var theNumber = 600851475143;
var largestPossiblePrime = parseInt(Math.sqrt(theNumber));

var isOddLargest = (largestPossiblePrime % 2 !== 0) ? largestPossiblePrime : largestPossiblePrime - 1;


for (var i = isOddLargest; i > 2; i -= 2) {
    if (theNumber % i === 0) {
        if (isPrime(i)) {
            console.log(i);
            break;
        }
    }
}

function isPrime(number) {
    for (var index = 2; index < number; index++) {
        if (number % index === 0) {
            return false;
        }
    }

    return true;
}