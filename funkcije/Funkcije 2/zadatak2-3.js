function concString(string, x){
    var finalString="";
    if (typeof x === "undefined") {
        x = 0;
    }
    var i = 0;
    do {
        i++;
        finalString += string;
    } while (i<x);
    return console.log(finalString);
}

concString("Tamara", 5)