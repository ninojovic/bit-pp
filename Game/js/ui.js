const showCircle = ({ x, y, r, color, points }) => {
    let $circle = $("<div class='circle'></div>")
        .css({
            width: `${r}px`,
            height: `${r}px`,
            top: `${y}px`,
            left: `${x}px`,
            background: color
        });
    $(".game-window").append($circle);

    return new Promise((resolve) => {
        $circle.on("click", function () {
            $(this).fadeOut(700, function () {
                this.remove();
            });
            resolve(points);
        })
    })
}

const clearGameWindow = () => {
    $(".game-window").children().remove();
}

const getPlayerName = () => $("input[type='text']").val();

const endGameMsg = (points) => {
    alert(`YOUR TIME IS OUT! YOU HAVE ${points} POINTS`)
};

const gameStarted = (newGameFunction) => {
    $("input[type='button']").on("click", newGameFunction);
}

export {
    showCircle,
    clearGameWindow,
    getPlayerName,
    endGameMsg,
    gameStarted,
}