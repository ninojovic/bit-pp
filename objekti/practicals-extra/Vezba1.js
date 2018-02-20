function duplicateElements(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++){
        newArr.push(arr[i],arr[i]);
    }
    return newArr;
}

var randomArr = [2, 4, 7, 11, -2, 1];

console.log(duplicateElements(randomArr));

