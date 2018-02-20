var someNumber = 1234567

function reverseNumber(num) {
    return parseInt(num.toString().split("").reverse().join(""))
}

console.log(reverseNumber(someNumber))
