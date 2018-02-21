// Banka ima ime i proizvoljan broj korisnika. Svaki korisnik ima proizvoljan broj kreditnih kartica. Pored kreditnih kartica korisnik ima ime i prezime, jmbg i broj licne karte. Kartica ima korisnika, broj kartice i pin kod. Svaki korisnik ima mogucnost podizanja sa neke od svojih kartica ili uplatu novca na istu, kao i transakciju sa jedne kartice na drugu. Kod svake transakcije voditi racuna o tome da li je tom transakcijom stanje na racunu manje od nule. Ukoliko se desi da transakcija dovede do takve situcaije, blokirati racun korisniku. Napisati odgovarajuce klase i testirati funkcionalnosti metoda kreiranjem dve banke i dodeljivanjem korisnika u svakou od njih. Svaki korisnik ima najmanje jednu karticu. Vratiti sve informacije o racunima cije je stanje manje od 0 za svaku banku pojedinacno.

function Bank(name) {
    this.name = name;
    this.membersList = [];
    this.blockedMembersList = [];
    
    this.createMember = function(firstName, lastName, jmbg, idNumber){
        var newMember = new Member(firstName, lastName, jmbg, idNumber);
        this.membersList.push(newMember);
    }
    this.isBlocked = function(memberCard) {
        for (var i = 0; i < this.blockedMembersList.length; i++){
            var blockedUser = this.blockedMembersList[i];
            for (var j = 0; j < blockedUser.cardsList.length; j++){
                var blockedUserCard = blockedUser.cardsList[j];
                if (memberCard === blockedUserCard){
                    return i+1;
                }
            }
        }
        return false;
    }
    this.withdrawMoney = function(cardId, pin, amount){
        for(var i = 0; i < this.membersList.length; i++){
            var user = this.membersList[i];
            for (var j = 0; j < user.cardsList.length; j++){
                var userCard = user.cardsList[i];
                if (cardId === userCard.cardId && pin === userCard.pin){
                    if(this.isBlocked(cardId)){
                        return "This transaction is invalid! Your account is blocked";
                    }
                    userCard.balance -= amount;
                    if (userCard.balance < 0) {
                        this.blockedMembersList.push(user);
                        return "Transaction successful but your card will be blocked while your account balance is negative!"
                    } else {
                        return "Transaction successful!"
                    }
                }
            }
        }
        return "Card ID or PIN invalid!"
    }
    this.depositMoney = function(cardId, amount) {
        for(var i = 0; i < this.membersList.length; i++){
            var user = this.membersList[i];
            for (var j = 0; j < user.cardsList.length; j++){
                var userCard = user.cardsList[i];
                if (cardId === userCard.cardId){
                    userCard.balance += amount;
                    if (this.isBlocked(cardId) && userCard.balance > 0){
                        this.blockedMembersList.splice(this.isBlocked(cardId)-1,1);
                        return "Transaction successful! You unblocked your account";
                    }
                    return "Transaction successful!";
                }
            }
        }
    }
}

function Member(firstName, lastName, jmbg, idNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.jmbg = jmbg;
        this.idNumber = idNumber;
        this.cardsList = [];
        this.createCard = function () {
            card = {
                user: this.firstName + " " + this.lastName,
                cardId: (function () {
                    var id = 1607991//Math.floor((9999999 - 1000000) * Math.random() + 1000000);
                    return id;
                }()),
                pin: (function () {
                    var pin = 1607//Math.floor((9999 - 1000) * Math.random() + 1000);
                    return pin;
                }()),
                balance: 0
            }
            this.cardsList.push(card);
        }
        this.createCard();
}

function createBank(name){
    return new Bank(name);
}


var intesa = createBank("intesa");
intesa.createMember("Ninoslav", "Jovic", 1607991940079, 608333);
console.log(intesa.depositMoney(, 500));
console.log(intesa.blockedMembersList);
console.log(intesa.depositMoney(1607991, 500));
console.log(intesa.membersList[0].cardsList);
console.log(intesa.blockedMembersList);
console.log(intesa.withdrawMoney(1607991,1607,950));
console.log(intesa.membersList[0].cardsList);
console.log(intesa.blockedMembersList);
console.log(intesa.withdrawMoney(1607991,1607,950));













