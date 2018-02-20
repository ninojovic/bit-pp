var randomString = "js string";

function capitalize(str) {
    var arrStr = str.split("");
    arrStr[0] = arrStr[0].toUpperCase();
    return arrStr.join("");
}

console.log(capitalize(randomString));
