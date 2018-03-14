class Player {
    constructor (name) {
        this.name = name;
        this.points = 0;
    }

    addPoints (pointsToAdd) {
        this.points += pointsToAdd;
    }
}

export default Player