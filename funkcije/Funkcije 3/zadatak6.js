function valueToArray(x, value){
    var newArray = [];
    var value = value || null;
    for (var i = 0; i < x; i++){
        newArray[i] = value;
    }
    return newArray;
}

console.log(valueToArray(6));
