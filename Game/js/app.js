import { generateRandomCircle, newPlayer, updatePoints } from "./data.js";
import { showCircle, clearGameWindow, getPlayerName, endGameMsg, gameStarted } from "./ui.js";

const initCircle = (player) => {
    const newCircle = generateRandomCircle();
    showCircle(newCircle)
    .then((points) => {
        player.addPoints(points);
        initCircle(player);
    })
}

const initGame = (player) => {
    for (let i = 0; i < 10; i++) {
        initCircle(player);
    }
    
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(player);
        }, 5000)
    })
}

const newGame = () => {
    const playerName = getPlayerName();
    const player = newPlayer(playerName);

    initGame(player)
    .then(({name, points}) => {
        endGameMsg(points);
        updatePoints(name, points);
        clearGameWindow();
    })
}

gameStarted(newGame);