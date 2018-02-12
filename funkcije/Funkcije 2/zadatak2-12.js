"use strict";
function retireYearsLeft(yearOfBirth, sex){
    var retireYears = 0;
    var error = 0;
    var currentYear = 2018;
    var yearOfRetirement = 0;
    var yearsLeft = 0;
    if (sex === "m"){
        retireYears = 65;
    } else if (sex === "f"){
        retireYears = 60;
    } else {
        error = 1;
    }
    yearOfRetirement = yearOfBirth + retireYears;
    yearsLeft = yearOfRetirement - currentYear;
    if (error !== 1){
        if (yearsLeft < 0){
            console.log("You are already retired!");
        } else if (yearsLeft > 0) {
            console.log("You need " +yearsLeft+ " more years to retire!");
        } else if (yearsLeft === 0){
            console.log("Current year is the year of your retirement!");
        } else {
            error = 1;
        }
    } else {
    console.log("Please enter a valid year and sex! Use 'm' (male), or 'f' (female).");
    }
}

retireYearsLeft(1953,"m");