var randomString = "My random. string, is the most randomest string! ever?";

function isWordInString(word, string) {
    var string = string + " ";
    var wordArray = [];
    var currentWord = "";
    var counter = 0;
    var result = "";
    
    var newIndex = 0;
    for (var i = 0; i < string.length; i++) {
        var elem = string[i]
        if (isValidSeparator(elem)) {
            currentWord += string[i];
        } else {
            wordArray[newIndex] = currentWord;
            currentWord = "";
            newIndex++;
        }
    }

    for (var i = 0; i < wordArray.length; i++) {
        if (wordArray[i] === word) {
            counter++
        }
    }

    if (counter > 0) {
        result = "\"" + word + "\" was found " + counter + " times!";
    } else {
        result = "There is no " + "\"" + word + "\" in your string!"
    }
    return result;
}

console.log(isWordInString("string", randomString));

function isValidSeparator(elem) {
    return (string[i] !== " ") && (string[i] !== ".") && (string[i] !== ",") && (string[i] !== "!") && (string[i] !== "?");
}