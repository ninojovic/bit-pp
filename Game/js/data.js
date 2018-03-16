import Circle from "./circle.js";
import Player from "./player.js";

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

const newPlayer = (playerName) => {
    const existingPlayer = JSON.parse(localStorage.getItem(playerName));

    if (!existingPlayer) {
        const player = new Player(playerName);
        localStorage.setItem(player.name, JSON.stringify(player));
        
        return player;
    }

    return new Player(playerName);
}

const updatePoints = (playerName, newRecord) => {
    const playerObj = JSON.parse(localStorage.getItem(playerName));
    const lastRecord = parseInt(playerObj.points);

    if (lastRecord < newRecord) {
        playerObj.points = newRecord;
        localStorage.setItem(playerObj.name, JSON.stringify(playerObj));
    }
}

export {
    generateRandomCircle,
    newPlayer,
    updatePoints,
}