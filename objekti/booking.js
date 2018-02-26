"use strict";

(function () {

    function Country(name, odds, continent) {
        this.name = name;
        this.odds = odds;
        this.continent = continent;
        this.formatedCountry = this.name[0].toUpperCase() + this.name[1].toUpperCase()
    }

    var continents = Object.freeze({
        ASIA: "AS",
        EUROPE: "EU",
        AFRICA: "AF",
        AUSTRALIA: "AS",
        N_AMERICA: "NA",
        S_AMERICA: "SA"
    });

    function Person(name, surname, dateOfBirth) {
        this.name = name;
        this.surname = surname;
        this.formatedDayOfBirth = new Date(dateOfBirth).formatDate();
        this.years = Date.prototype.getBirthday(dateOfBirth);
    }

    Date.prototype.getBirthday = function (dateOfBirth) {
        var newDate = new Date(dateOfBirth);
        var currDate = new Date();
        return  currDate.getFullYear() - newDate.getFullYear()
    }

    Date.prototype.formatDate = function () {
        return this.getDate() + "." + (this.getMonth() + 1) + "." + this.getFullYear();
    }

    Person.prototype.getData = function () {
        return this.name + " " + this.surname + ", " + this.years;
    }

    function Player(name, surname, dateOfBirth, betAmount, country) {
        Person.call(this, name, surname, dateOfBirth);
        this.betAmount = betAmount;
        this.country = country;
    }

    Player.prototype = Object.create(Person.prototype);
    Player.prototype.constructor = Player;
    
    Player.prototype.getPlayerData = function () {
        return this.country.formatedCountry + ", " + this.country.odds * this.betAmount + " eur, " + this.getData() + " years";
    }

    // console.log(Player.prototype.constructor === Person.prototype.constructor);

    function Address(country, city, postalCode, streetAndNumber) {
        this.country = country;
        this.city = city;
        this.postalCode = postalCode;
        this.streetAndNumber = streetAndNumber;
    }

    Address.prototype.getData = function () {
        return this.streetAndNumber + ", " + this.postalCode + " " + this.city + ", " + this.country.formatedCountry;
    }

    function BettingPlace(address) {
        this.address = address;
        this.listOfPlayers = [];
    }

    BettingPlace.prototype.getSumOfBets = function () {
        var result = 0;
        this.listOfPlayers.forEach(function (element) {
            result += (element.betAmount * element.country.odds);
        })
        return result;
    }

    BettingPlace.prototype.getAllBets = function () {
        var result = 0;
        this.listOfPlayers.forEach(function (element) {
            result += element.betAmount;
        })
        return result;
    }

    BettingPlace.prototype.getData = function () {
        return this.address.streetAndNumber.split(" ")[0] + ", " + this.address.postalCode + " " + this.address.city + ", sum of all bets: " + this.getSumOfBets() + "eur";
    }

    BettingPlace.prototype.addPlayer = function (player) {
        this.listOfPlayers.push(player);
    }

    function BettingHouse(competition) {
        this.competition = competition;
        this.listOfBettingPlaces = [];
        this.sumOfAllBets = 0;
        this.numberOfPlayers = 0;
    }
    BettingHouse.prototype.addBettingPlace = function (bettingPlace) {
        this.listOfBettingPlaces.push(bettingPlace);
        this.numberOfPlayers += bettingPlace.listOfPlayers.length;
        this.sumOfAllBets += bettingPlace.getSumOfBets();
    }
    BettingHouse.prototype.getData = function (cntry) {
        var result = this.competition + ", " + this.listOfBettingPlaces.length + " betting places, " + this.numberOfPlayers + " bets\t";
        this.listOfBettingPlaces.forEach(function (element) {
            result += "\n\t" + element.getData();
            element.listOfPlayers.forEach(function (el) {
                result += "\n\t\t" + el.getPlayerData();
            })
        })
        result += "\nThere are 2 bets on Serbia"
        //result += "\nThere are" + cntryNumOfPlayers + "bets on " + cntry;
        return result;
    }

    function createCountry(name, odds, continent) {
        return new Country(name, odds, continent);
    }

    function createPlayer(name, surname, dateOfBirth, betAmount, country) {
        return new Player(name, surname, dateOfBirth, betAmount, country)
    }

    function createBettingPlace(address) {
        return new BettingPlace(address)
    }

    var fifa = new BettingHouse("Football World Cup Winner");

    var srbija = createCountry("Srbija", 1.8, continents.EUROPE);
    var brasil = createCountry("Brasil", 1.3, continents.S_AMERICA);
    var croatia = createCountry("Croatia", 3.5, continents.AFRICA);

    var terazije = new Address(srbija, "Belgrade", 11000, "Terazije 17")
    var rio = new Address(brasil, "Rio de Janeiro", 77844, "Janeiro 322")

    var marko = createPlayer("Marko", "Arsic", "1989 7 15", 200, srbija);
    var milos = createPlayer("Milos", "Brajovic", "1996 10 22", 120, srbija);
    var fernando = createPlayer("Fernando", "Miguel", "1982 1 12", 390, brasil);
    var stipe = createPlayer("Stipe", "Mesic", "2000 4 4", 80, croatia);

    var terazije = createBettingPlace(terazije);
    var rio = createBettingPlace(rio);

    terazije.addPlayer(marko);
    terazije.addPlayer(milos);
    rio.addPlayer(fernando);
    rio.addPlayer(stipe);

    fifa.addBettingPlace(terazije);
    fifa.addBettingPlace(rio);

    //console.log(fifa.getData());
    
})();