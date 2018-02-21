"use strict";

(function (){

    function Person (name, surname) {
        this.name = name;
        this.surname = surname;

        this.getData = function() {
            
            return this.name + " " + this.surname
        }
    }

    function Seat (seatNumber, seatCategory) {
        this.seatNumber = seatNumber || Math.floor((100 - 10) * Math.random() + 10);
        this.seatCategory = seatCategory || "E";

        this.getData = function() {
            
            return this.seatNumber + ",\t" + this.seatCategory.toUpperCase() + ","
        }
    }

    function Passenger (person, seat) {
        this.person = person;
        this.seat = seat;

        this.getData = function () {
            
            return this.seat.getData() + "\t" + this.person.getData()
        }
    } 

    function Flight (relation, date) {
        this.relation = relation;
        this.date = new Date(date);
        this.list = [];

        this.getDate = function() {
            var year = this.date.getFullYear()
            var month = this.date.getMonth() + 1
            var day = this.date.getDate()

            return day + "." + month + "." + year + ".";
        }

        this.getData = function() {            
            return this.getDate() + " " + this.relation
        }

        this.addPassenger = function (passenger) {
            return (passenger === undefined) ? this.list.length : this.list.push(passenger);
        }
    }

    function Airport (name) {
        this.name = name;
        this.listOfFlights = [];

        this.addFlight = function(flight) {
            this.listOfFlights.push(flight)
            return "Success"
        }

        this.flightCount = function(){
            var counter = 0
            var string = ""
            for(var i = 0; i < this.listOfFlights.length; i++) {
                counter += this.listOfFlights[i].addPassenger()
                string += "\t" + this.listOfFlights[i].getData() + "\n"
                for(var j = 0; j < this.listOfFlights[i].list.length; j++) {
                    string += "\t\t" + this.listOfFlights[i].list[j].getData() + "\n"
                }
            }

            return [counter, string]
        }

        this.getData = function (){
            var lineOne = "Airport: " + this.name + ", total passengers: " + this.flightCount()[0] + "\n" + this.flightCount()[1]
            return lineOne 
        }
    }

    function createFlight(relation, date) {
        return new Flight(relation, date);
    }

    function createPassenger(name, surname, seatNumber, seatCategory) {
        var newPerson = new Person(name, surname);
        var newSeat = new Seat(seatNumber, seatCategory);

        return new Passenger(newPerson, newSeat);
    }

    var nikolaTesla = new Airport("Nikola Tesla");
    var belgradeAmsterdam = createFlight("Belgrade - Amsterdam", "2018 2 21");
    var sofiaParis = createFlight("Sofia - Paris", "2018 4 24");
    var vuk = createPassenger("Vuk", "Ivanovic", 1, "b");
    var nino = createPassenger("Ninoslav", "Jovic", 2, "b");
    var deneris = createPassenger("Deneris", "Targarien", 14);
    var tirion = createPassenger("Tirion", "Lenister");
    belgradeAmsterdam.addPassenger(vuk);
    belgradeAmsterdam.addPassenger(deneris);
    sofiaParis.addPassenger(nino);
    sofiaParis.addPassenger(tirion);
    nikolaTesla.addFlight(belgradeAmsterdam);
    nikolaTesla.addFlight(sofiaParis);
    console.log(nikolaTesla.getData());


})();