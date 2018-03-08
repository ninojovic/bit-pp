class Vacation {
    constructor(destination, length) {
        this.destination = destination;
        this.length = length;
    }

    print() {
        console.log(`${this.destination} | ${this.length}`)
    }
}


class Expedition extends Vacation {
    constructor(destination, length, gear) {
        super(destination, length)
        this.gear = gear
    }
    print() {
        super.print();
        console.log(`Bring your ${this.gear.join(" and your ")}`)
    }
}

let maui = new Vacation("maui", 7);
maui.print();

let bla = new Expedition("maui", 7, ["kme", "meh"]);
bla.print();