import Circle from "./circle.js";

const createRandomNumber = (max, min = 0) => Math.floor((max - min) * Math.random() + min);

const generateRandomCircle = () => {
    let red = createRandomNumber(255);
    let green = createRandomNumber(255);
    let blue = createRandomNumber(255);

    let x = createRandomNumber(900);
    let y = createRandomNumber(650);
    let r = createRandomNumber(130, 20);
    let color = `rgb(${red}, ${green}, ${blue})`

    return new Circle(x, y, r, color);
}

export {
    generateRandomCircle,
}