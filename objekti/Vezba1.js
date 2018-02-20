function intertwineArr(arr1) {
    var newArr = [];
    var newIndex = 0;
    for (var i = 0; i < arr1.length; i++){
        newArr[newIndex] = arr1[i];
        newIndex++;
        newArr[newIndex] = arr1[i];
        newIndex++
    }
    return newArr;
}

var randomArr = [2, 4, 7, 11, -2, 1];

console.log(intertwineArr(randomArr));

