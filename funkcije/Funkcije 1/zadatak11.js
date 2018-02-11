var givenString = "lkjw";
function concString(string, x){
    var finalString = "";
    for(var i=0;i<x;i++){
        finalString += string;
    }
    return console.log(finalString);
}

concString(givenString,5);