var givenStr = "How many time do A appear?";
function letterAppear(string){
    var counter = 0;
    for (var i=0; i<string.length;i++){
        if ((string[i] === "A") || (string[i] === "a")){
            counter++;
        }
    }
    return console.log(counter);
}

letterAppear(givenStr);