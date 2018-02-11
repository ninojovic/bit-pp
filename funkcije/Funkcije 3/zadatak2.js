function filterArrToString(inputArr) {
    var filteredString = "";

    for (var i = 0; i < inputArr.length; i++) {
        var currentElementType = typeof inputArr[i];
        var element = inputArr[i];

        if ((currentElementType === "string" || currentElementType === "number") && isFinite(element)) {
            filteredString += element;
        }
    }

    return filteredString;
}


var randomArray = [NaN, 0, 15, false, -22, "", undefined, 47, null];
console.log(filterArrToString(randomArray));
