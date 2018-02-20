
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



console.log(sortArr(isPro, lessThen));


