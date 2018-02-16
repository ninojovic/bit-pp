/**
   * Take a look at this common scenario–you have a function that returns a value,
   * which you then pass to another function. In our example, the first function,
   * multiplyByTwo(), loops through passed input array, multiplies each element
   * by two, and returns an array containing the result. The second function,
   * addOne(), takes a value, adds one to it, and returns it
  */
 "use strict";

function filterArr(inputArray, callback) {
    var newArray = [];
    var newIndex = 0;
    for (var i = 0; i < inputArray.length; i++) {
        var element = inputArray[i];
        if (!!callback(element)){
            newArray[newIndex] = element;
            newIndex++;
        }
    }
    return newArray;
}

var randomArr = [10, 32, 20, 30,53, 50, 15, 355];

var myarr = randomArr.filter(function (element) {
    return element % 2 === 0;
});

(function () { 
    console.log("Hello World");
})();

// var myarr = filterArr(randomArr, function (elem){
//     return elem % 5 !== 0;
//  });

console.log(myarr);