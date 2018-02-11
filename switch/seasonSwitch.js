var a = 6;
var result = "not a day";
switch (a) {
    case 3:
    case 4:
    case 5:
        result = "Spring";
        break;
    case 6:
    case 7:
    case 8:
        result = "Summer";
        break;
    case 9:
    case 10:
    case 11:
        result = "Autumn";
        break;
    case 12:
    case 1:
    case 2:
        result = "Winter";
        break;
    default:
        result = "Please enter a number between 1 and 12!"
        break;
}
console.log(result);