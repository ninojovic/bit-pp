function firstOcc(string, a){
    var error = 1;
    var place = 0;
    for(var i=0;i<string.length;i++){
        if (string[i] === a){
            error = 0;
            place = i;
        }
    }
    if (error === 1) {
        return console.log(-1);
    } else {
        return console.log("Slovo " + a + " se zadnji put pojavljuje na " + (place+1) + ". mestu!");
    }
}


firstOcc("Daj mi neki string!", "n");