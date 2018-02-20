var randomStr = "Ninoslav Jovic";

function abbreviatedStr (str) {
    var strArr = str.split(" ");
    strArr[1] = strArr[1].charAt(0) + ".";
    return strArr.join(" ");
}

console.log(abbreviatedStr(randomStr));
