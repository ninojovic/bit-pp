class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    print() {
        console.log(`   ${this.name} ${this.surname}`);
    }
}

class Footballer extends Person {
    constructor(name, surname, number){
        super(name, surname);
        this.number = number;
    }

    print(){
        super.print();
        console.log(`Footballer number: ${this.number}`);
    }
}

class Programmer extends Person {
    constructor(name, surname, languages = []){
        super(name, surname);
        this.languages = languages;
    }

    print() {
        super.print();
        console.log(`Programmer: ${this.languages.join(", ")}`);
    }

    learnNewLanguage (newLanguage) {
        this.languages.push(newLanguage);
    }
}

const pera = new Programmer("Pera", "Peric", ["JavaScript", "Python", "PHP"]);
const zika = new Programmer("Zika", "Zikic", ["Java", "C#"]);
const milos = new Footballer("Milos", "Misic", 14);

const globalPersons = [];

globalPersons.push(pera, zika, milos);

globalPersons.forEach(function (el){
    el.print();
});

let {languages} = pera;

console.log(languages);



