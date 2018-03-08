"use strict";
(function () {

    function Person(name, surname) {
        this.name = name;
        this.surname = surname;

    }
    Person.prototype.getData = function () {
        return `${this.name} ${this.surname}`;
    }

    function Seat(number = getRandomNumber(100, 10), category = "e") {
        this.number = number;
        this.category = category;
    }
    Seat.prototype.getData = function () {
        return `${this.number}, ${this.category.toUpperCase()}`;
    }

    function Passanger(personobj, seatobj) {
        this.personobj = personobj;
        this.seatobj = seatobj;
    }
    Passanger.prototype.getData = function () {
        return `${this.seatobj.getData()}, ${this.personobj.getData()}`;
    }

    function Flight(relation, date) {
        this.relation = relation;
        this.date = new Date(date);
        this.listOfPassangers = [];
    }

    Flight.prototype.getData = function () {
        var date = `${this.date.getDate()}.${(this.date.getMonth() + 1)}.${this.date.getFullYear()}`;
        var relArr = this.relation.split(" - ")
        var relRes = "";
        var temp = "";
        relArr.forEach(function (el, i) {
            var tempArr = el.split("");
            tempArr.forEach(function (element, i) {
                element.toLowerCase();
                if (element !== "a" && element !== "e" && element !== "u" && element !== "o" && element !== "i") {
                    temp += element.toUpperCase();
                }
            })
            relRes += temp[0] + temp[temp.length - 1];
            temp = "";
            if (i === 0) {
                relRes += " - ";
            }
        })

        return `${date}, ${relRes}`;
    }

    Flight.prototype.addPassanger = function (passanger) {
        this.listOfPassangers.push(passanger);
    }

    function Airport(name = "Nikola Tesla") {
        this.name = name;
        this.listOfFlights = [];


    }
    Airport.prototype.addFlight = function (flight) {
        this.listOfFlights.push(flight);
    }
    Airport.prototype.getData = function () {
        let passangerCount = 0;
        let secondRow = "";
        for (let i = 0; i < this.listOfFlights.length; i++) {
            passangerCount += this.listOfFlights[i].listOfPassangers.length;
            secondRow += "\t" + this.listOfFlights[i].getData() + "\n";
            for (let j = 0; j < this.listOfFlights[i].listOfPassangers.length; j++) {
                secondRow += "\t\t" + this.listOfFlights[i].listOfPassangers[j].getData() + "\n";
            }
        }

        const firstRow = `Airport: ${this.name}, total passangers: ${passangerCount}
        `;


        return firstRow + secondRow;
    }

    function getRandomNumber (max, min) {
        return Math.floor((max - min) * Math.random() + min);
    }


    function createFlight(relation, date) {
        return new Flight(relation, date);
    }

    function createPassanger(name, surname, seat, category) {
        const personobj = new Person(name, surname);
        const seatobj = new Seat(seat, category);

        return new Passanger(personobj, seatobj);
    }

    const passanger1 = createPassanger("John", "Snow", 1, "b");
    const passanger2 = createPassanger("Cersei", "Lannister", 2, "b");
    const passanger3 = createPassanger("Daenerys", "Targaryen", 14);
    const passanger4 = createPassanger("Tyrion", "Lannister");

    const flight1 = createFlight("Belgrade - New York", new Date("Oct 25 2017"));
    const flight2 = createFlight("Barcelona - Belgrade", new Date("Nov 11 2017"));

    const airport = new Airport();

    flight1.addPassanger(passanger1);
    flight1.addPassanger(passanger2);
    flight2.addPassanger(passanger3);
    flight2.addPassanger(passanger4);

    airport.addFlight(flight1);
    airport.addFlight(flight2);

    // console.log(johnPerson.getData());
    // console.log(johnSeat.getData());
    // console.log(passanger4.getData());
    // console.log(flight1.getData());
    // console.log(airport.listOfFlights);
    console.log(airport.getData());


})()