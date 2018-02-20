function parseIt (num, currentRadix, toRadix) {
    var stringify = num.toString(toRadix) + "";
    return parseInt(stringify,currentRadix);
}


console.log(parseIt("ff",16,10));

