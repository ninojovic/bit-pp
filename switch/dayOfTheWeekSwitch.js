var a = 1;
var result = "not a day";
switch (a) {
    case 1:
        result = "monday";
        break;
    case 2:
        result = "tuesday";
        break;
    case 3:
        result = "wendsday";
        break;
    case 4:
        result = "thursday";
        break;
    case 5:
        result = "friday";
        break;
    case 6:
        result = "Saturday";
        break;
    case 7:
        result = "Sunday";
        break;
    default:
        result = "Please enter a number between 1 and 7!"
        break;
}
console.log(result);