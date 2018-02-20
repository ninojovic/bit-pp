function daysToBirthday(date) {
    var currentDate = new Date();
    var birthdayDate = new Date(date + currentDate.getFullYear());
    var milisecToBirthday = birthdayDate.getTime() - currentDate.getTime();
    var daysToB = milisecToBirthday/1000/60/60/24 + 1;
    return parseInt(daysToB);
}

console.log(daysToBirthday("25 February"));
