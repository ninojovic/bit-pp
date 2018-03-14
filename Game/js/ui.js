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
            $(this).fadeOut(300, function () {
                this.remove();
            });
            resolve(points);
        })
    })
}

const clearGameWindow = () => {
    $(".game-window").children().remove();
}

const newGame = (player, eventHandler) => {
    $("input").on("click", eventHandler);
}

export {
    showCircle,
    clearGameWindow,
    newGame,
}