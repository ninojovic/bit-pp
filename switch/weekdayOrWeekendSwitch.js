var a = 12;
var result = "not a day";
switch (a) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        result = "Weekday";
        break;
    case 6:
    case 7:
        result = "Weekend";
        break;
    default:
        result = "Please enter a number between 1 and 7!"
        break;
}
console.log(result);