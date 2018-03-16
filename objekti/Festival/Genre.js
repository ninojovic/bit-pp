class Genre {
    constructor(name) {
        this.name = name;
    }
    getData() {
        const firstLetter = this.name.charAt(0);
        const lastLetter = this.name.charAt(this.name.length - 1);
        const result = firstLetter + lastLetter;

        return result.toUpperCase();
    }
}

module.exports = Genre