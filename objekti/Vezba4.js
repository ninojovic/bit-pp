function smallestElement(arr) {
    var newArr = [];
    newArr = newArr.concat(arr);
    newArr.sort()
    var smallest = newArr[0];
    var smallestIndex = arr.lastIndexOf(smallest);
    return [smallest, smallestIndex];
}


console.log(smallestElement([1, 4, -2, 11, 8, 1, -2, 3]));