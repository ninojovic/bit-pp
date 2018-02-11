var givenArr = ["1", "21", undefined, "42", "1e+3", Infinity]
function stringToNumber(strArr){
    var newArr = [];
    var counter = 0;
    for(var i = 0; i < strArr.length; i++){
        if (isFinite(strArr[i])) {
            counter++;
                newArr[counter-1] = parseFloat(strArr[i],10);
        }
    }
    console.log(newArr);
}

stringToInt(givenArr);