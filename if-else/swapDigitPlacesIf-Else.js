var num = 70;
if (typeof num === "number") {
    if (num > 9 && num < 100) {
        var firstDigitNew = (num % 10)*10;
        var secondDigitNew = (num - (num % 10)) / 10;
        var newNumber = "" + (firstDigitNew + secondDigitNew);
        console.log("Entered number was: " + num + " , and new number is: " + newNumber);
    } else {
        console.log("Please enter a two digit number!");
    }
} else {
    console.log("please enter a number");
}