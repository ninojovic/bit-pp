function stringInArr(string, separator){
    var sep = separator || "-";
    var arr = [];
    var finalString = "";
    for (var i = 0; i<string.length; i++){
        (string[i] === " ") ? arr[i] = sep : arr[i] = string[i];
        finalString += arr[i];
    }
    console.log(finalString);
}

stringInArr("My random string!","+");