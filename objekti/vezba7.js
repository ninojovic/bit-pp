function anyDigit(str) {
    var strArr = str.split("");
    for (var i = 0; i < strArr.length; i++){
        var num = parseInt(strArr[i]);
        if (typeof num === "number" && !isNaN(num)){
            return "TRUE";
        }
    }
    return "FALSE"
}

var randomStr = "My1 random string";

console.log(anyDigit(randomStr));
