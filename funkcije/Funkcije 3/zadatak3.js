var randomArray = [NaN, 0, 15, false, -22, "", undefined, 47, null];
function filterFalsyArray(array) {
    var filteredArray = [];
    var newIndex = 0;
    for (var i = 0; i < array.length; i++) {
        if (!!array[i]) {
            filteredArray[newIndex] = array[i];
            newIndex++;
        }
    }
    return filteredArray;
}

console.log(filterFalsyArray(randomArray));
