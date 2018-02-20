var randomStr = 123;

function pad(len, str, startPos) {
    str = (typeof str !== "string") ? str.toString() : str;
    var appendChar = len[0];
    var startPos = startPos || 0;
    var newArr = new Array(len.length).fill(appendChar);
    newArr.splice(startPos, str.length, str);
    console.log(newArr);
    return newArr.join("");
}

console.log(pad("00000000", randomStr, ""));
