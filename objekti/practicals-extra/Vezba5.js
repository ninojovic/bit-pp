
function lessThen(arr){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < num){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}


function isPro(arr) {
    var newArr = [];
    for(var i = 0; i < arr.length; i++) {
        var str = arr[i];
        str = str.toLowerCase();
        if ((str[0]+str[1]+str[2]) === "pro") {
            newArr.push(str);
        } 
    }
    return newArr;
}

function startsWith(element, str){
    var element = element.toLowerCase();
    var str = str.toLowerCase();
    return (element.indexOf(str) !== -1) ? true : false;
}

function isLessThen(element, lessThen){
    return (element < lessThen) ? true : false;
}

function filterArr(inputArray, filterFunc, additionalParam) {
    var newArray = [];
    for (var i = 0; i < inputArray.length; i++) {
        var element = inputArray[i];
        if (filterFunc(element, additionalParam)){
            newArray.push(element);
        }
    }
    return newArray;
}

var randomArrStr = ["JavaScript", "Programming", "fun", "product"];
var randomArrNum = [2, 3, 8, -2, 11, 4];

console.log(filterArr(randomArrStr, startsWith, "jav"))
console.log(filterArr(randomArrNum, isLessThen, 6));



