import Player from "./player.js";
import { generateRandomCircle } from "./data.js";
import { showCircle, clearGameWindow } from "./ui.js";


const initCircle = (player) => {
    const newCircle = generateRandomCircle();
    showCircle(newCircle)
    .then((points) => {
        player.addPoints(points);
        initCircle(player);
    })
}

const startGame = (player) => {
    for (let i = 0; i < 10; i++) {
        initCircle(player);
    }
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(player);
        }, 5000)
    })
}

const newGame = (player) => {
    player.points = 0;
    startGame(player)
    .then(({name, points}) => {
        alert(`YOUR TIME IS OUT! YOU HAVE ${points} POINTS`);
        
        const currentRecord = parseInt(localStorage.getItem(name));
        
        if(currentRecord < points){
            localStorage.setItem(name, points);
        }
        
        clearGameWindow();
    })
}

$("input").on("click", () => {
    newGame(nino);
})

const nino = new Player("Nino");