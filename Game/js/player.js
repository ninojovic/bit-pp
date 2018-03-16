class Player {
    constructor (name, points = 0) {
        this.name = name;
        this.points = points;
    }

    addPoints (pointsToAdd) {
        this.points += pointsToAdd;
    }
}

export default Player