var a = "C";
var result = "not a grade";
switch (a) {
    case "A":
        result = "Good job";
        break;
    case "B":
        result = "Pretty good";
        break;
    case "C":
        result = "Passed";
        break;
    case "D":
        result = "Not so good";
        break;
    case "F":
        result = "Failed";
        break;
    default:
        result = "Unknown grade!";
        break;
}
console.log(result);