var randomArr1 = [4, 12, 33, 50];
var randomArr2 = [-12, -32, -41, -55];

function intertwineArr(arr1, arr2) {
    var newArr = [];
    var newIndex = 0;
    for (var i = 0; i < arr1.length; i++){
        newArr[newIndex] = arr1[i];
        newIndex++;
        newArr[newIndex] = arr2[i];
        newIndex++
    }
    return newArr;
}

console.log(intertwineArr(randomArr1, randomArr2));
