function firstNLetters(string, n){
    var newString = "";
    for (var i = 0; i < n; i++){
        newString += string[i];
    }
    newString += "...";
    console.log(newString);
}

firstNLetters("Ninoslav", 4);