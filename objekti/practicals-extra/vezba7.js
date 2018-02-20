function areAllCapitals(str){
    var strToUpper = str.toUpperCase();
    for (var i = 0; i < str.length; i++){
        if (str[i] !== strToUpper[i]){
            return "String is not written in all capitals";
        }
    }
    return "string is written in all capitals";
}

function containsDigit(str) {
    var strArr = str.split("");
    for (var i = 0; i < strArr.length; i++){
        var num = parseInt(strArr[i]);
        if (typeof num === "number" && !isNaN(num)){
            return "There is a digit in this string";
        }
    }
    return "There is no digits in this string"
}

function isValidHexaColor(str){
    if (str.length !== 7 || str[0] !== "#") {
        return false;
    }
    var pairArr = [str[1]+str[2], str[3]+str[4], str[5]+str[6]];
    for (var i = 0; i < pairArr.length; i++){
        var pair = pairArr[i];
        var pairNum = parseInt(pair,16);
        if (pairNum >= 256 || isNaN(pairNum)) {
            return false;
        }
    }
    return true;
}

function belongsToInterval (year){
    return (year > 1900 && year < 2018) ? true : false;
}

function validator(){
    var validator = {
        stringValidator: areAllCapitals,
        passwordValidator: containsDigit,
        colorValidator: isValidHexaColor,
        yearValidator: belongsToInterval
    }

    return validator;
}

var valid = validator();

console.log(valid);


