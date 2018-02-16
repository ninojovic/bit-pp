// The body mass index (BMI) is the ratio of the weight of a person (in kilograms) to the square of the height (in meters). 
// Write a function that takes two parameters, weight and height, computes the BMI, and prints the corresponding BMI category:
// weight / (height * height);
//      Starvation:     < 15
//      Anorexic:       < 17.5
//      Underweight:    < 18.5
//      Ideal:          18.5 >= && < 25
//      Overweight:     25 >= && < 30
//      Obese:          30 >= && < 40
//      Morbidly obese: >= 40
"use strict";

function bmiCategory(weight, height) {
    var bmi = weight / (height * height);
    var result = "";
    
    switch (true) {
        case (bmi < 15):
            return "Starvation";
        case (bmi < 17.5):
            return "Anorexic";
        case (bmi < 18.5):
            return "Underweight";
        case (bmi >= 18.5 && bmi < 25):
            return "Ideal";
        case (bmi >= 25 && bmi < 30):
            return "Overweight";
        case (bmi >= 30 && bmi < 40):
            return "Obese";
        case (bmi >= 40):
            return "Morbidly obese";
        default:
            return "Invalid input";
    }
}

console.log(bmiCategory(72, 1.7));
