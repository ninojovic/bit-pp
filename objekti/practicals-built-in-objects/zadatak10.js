var randomString = "My Random String";

function switchCase(str){
    var newStr = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()){
            newStr += str[i].toLowerCase();
        } else {
            newStr += str[i].toUpperCase();
        }
    }
    return newStr;
}

console.log(switchCase(randomString));
