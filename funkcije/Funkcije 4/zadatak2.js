var randomArr = [-3, 11, 5, 3.4, -8];

function multiplePos(array){
    var newArr = [];
    for (var i=0; i < array.length; i++){
        if (array[i] > 0) {
            newArr[i] = (array[i]*2);
        } else {
            newArr[i] = array[i];
        }
    }
    return newArr;
}

console.log(multiplePos(randomArr));