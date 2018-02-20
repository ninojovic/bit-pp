var noDoublesArr = [];
var array =  [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];
var newIndex = 0;
var unique = false;

for (var i = 0; i < array.length; i++) {
    var j = 0;
    do {
        if (noDoublesArr[j] === array[i]) {
            unique = false;
            break;
        } else {
            unique = true;
        }
        j++;
    } while (j < noDoublesArr.length);

    if (unique) {
        noDoublesArr[newIndex] = array[i];
        newIndex++;
    }
    noDoublesArr.sort(function (a, b){
        return a - b;
    });
}

console.log(noDoublesArr);
