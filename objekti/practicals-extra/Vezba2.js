function makeUnique(arr){
    var uniqueArr = [arr[0]];
    for (var i = 0; i < arr.length; i++){
        var oldArrEl = arr[i];
        var unique = 0;
        for (var j = 0; j < uniqueArr.length; j++){
            var uniqArrEl = uniqueArr[j];
            if (uniqArrEl === oldArrEl){
                unique++;
            }
        }
        if (unique === 0) {
            uniqueArr.push(oldArrEl);
        }
    }
    return uniqueArr;
}

var randomArr = [ 2, 2, 4, 4, 7, 7, 11, 11, -2, -2, 1, 1 ];

console.log(makeUnique(randomArr));
