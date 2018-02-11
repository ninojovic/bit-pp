var randomString = "My random string!";

function insertString(strToInsert,string, position) {
    var pos = position || 1;
    var result = "";
    var firstPartStr = "";
    var secondPartStr = "";
    var firstItteration = 0;
    for (var i = 0; i < string.length; i++){
        if (i < pos-1){
            firstPartStr += string[i];
            if (i === pos-2 && string[i] !== " ") {
                firstPartStr += " ";
            }
        } else {
            if (firstItteration === 0 && string[i] !== " ") {
                secondPartStr += " ";
            }
            secondPartStr += string[i];
            firstItteration++;
        }
    }
    return result = firstPartStr + strToInsert + secondPartStr;
}

console.log(insertString("JS", randomString, 0));
 