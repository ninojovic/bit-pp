var someString = "Ovo nije jedna rec";

function sortWords(str) {
    var sortedArr = str.split(" ");
    for (var i = 0; i < sortedArr.length; i++){
        sortedArr[i] = sortedArr[i].toString().toLowerCase().split("").sort().join("")
    }
    return sortedArr.sort();
}

console.log(sortWords(someString))