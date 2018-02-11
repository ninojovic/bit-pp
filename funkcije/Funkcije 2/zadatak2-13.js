function humanizeNumber(num) {
        var lastDigit = num % 10;
        var lastTwoDigits = num % 100;
        var humanized = "";

        if (lastDigit === 1 && lastTwoDigits !== 11) {
            result = num + "st";
        } else if (lastDigit === 2 && lastTwoDigits !== 12) {
            result = num + "nd";
        } else if (lastDigit === 3 && lastTwoDigits !== 13) {
            result = num + "rd";
        } else {
        result = num + "th";
        }
        return result;
}


console.log(humanizeNumber(21));


/*

ending 1 = st
ending 2 = nd
ending 3 = rd

ending 11 = th;
ending 12 = th;
ending 13 = th;

all others th;

*/
