function stringInArr(string){
    var arr = [];
    for (var i = 0; i<string.length; i++){
        if (string[i] === " "){
            arr[i] = null;
        } else {
            arr[i] = string[i];
        }
    }
    return console.log(arr);
}


stringInArr("My random string");