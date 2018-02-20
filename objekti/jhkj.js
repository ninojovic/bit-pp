function Osoba(ime, prezime, godine) {
    this.name = ime;
    this.lastName = prezime;
    this.age = godine;
}

var uros = new Osoba("Uros", "Vukosavljevic", 29);

console.log(uros);
