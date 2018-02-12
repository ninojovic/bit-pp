//Write a function to find and return the first, middle and last element of an array if the array has odd number of elements. 
//If number of elements is even, return just the first and the last. In other cases, input array should be returned.
"use strict"

function returnNth(arr){
    var len = arr.length;
    var oddArr = (len % 2 === 0) ? false : true;
    var firstEl = arr[0];
    var lastEl = arr[len-1];

    if (!!oddArr) {
        var middleEl = arr[(len - 1) / 2]
        var result = "First element is: " + firstEl + "\nMiddle element is: " + middleEl + "\nLast element is: " + lastEl;
        return result; 
    } else {
        result = "First element is: " + firstEl + "\nLast element is: " + lastEl;
        return result;
    }

    return arr;
}

var randomArr = [345, 12, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];

console.log(returnNth(randomArr));
