function firstOcc(string, a){
    var error = 1;
    for(var i=0;i<string.length;i++){
        if (string[i] === a){
            return console.log("Slovo " + a + " se prvi put pojavljuje na " + (i+1) + ". mestu!");
            error = 0;
            break;
        }
    }
    if (error === 1) {
        return console.log(-1);
    }
}


firstOcc("Daj mi neki string!", "n");