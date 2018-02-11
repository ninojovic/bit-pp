var newArr = [];

function addArr(arr){
    var newIndex = newArr.length;
    for (var i = 0; i < arr.length; i++){
        newArr[newIndex] = arr[i];
        newIndex++;
     }
    return newArr;
}
    
var randomArr1 = [4, 12, 33, 50];
var randomArr2 = [-12, -32, -41, -55, 3232];
var randomArr3 = ["random", "string"];


var added = addArr(randomArr1);
added = addArr(randomArr2);
added = addArr(randomArr3);

console.log(added);