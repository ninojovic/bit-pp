var someString = "jednarec"

function sortStr(str) {
    return str.toString().split("").sort().join("")
}

console.log(sortStr(someString))