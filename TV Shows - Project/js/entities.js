class Show {
    constructor (id,name, posterURL, seasons, cast, details) {
        this.id = id;
        this.name = name;
        this.posterURL = posterURL;
        this.seasons = seasons;
        this.cast = cast;
        this.details = details;
    }
}

class Season {
    constructor (startDate, endDate) {
        this.startDate = new Date(startDate);
        this.endDate = new Date(endDate);
    }

    const getInfo = () =>  `${this.startDate.formatDate()} - ${this.endDate.formatDate()}`;
}

class Actor {
    constructor (name, surname) {
        this.name = name;
        this.surname = surname;
    }
    
    const getInfo = () =>  `${this.name} ${this.surname}`;
}

Date.prototype.formatDate = () => `${this.getDate()}.${this.getMonth()}.${this.getFullYear()}`;