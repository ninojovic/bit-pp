function person(firstName, lastName, jmbg){
    this.firstName = firstName;
    this.lastName = lastName;
    this.jmbg = jmbg;
    this.regionArr = ["foreigner", "BiH", "Crnoj Gori", "Hrvatskoj", "Makedoniji", "Sloveniji", "", "Srbiji", "Vojvodini", "KiM", "Banja Luka", "Bihac", "Doboj", "Gorazde", "Livno", "Mostar", "Prijedor", "Sarajevo", "Tuzla", "Zenica", "Crna Gora", "Podgorica", "Crna Gora", "Crna Gora", "Crna Gora", "Crna Gora", "Niksic", "Crna Gora", "Crna Gora", "Pljevlja", "Osijek", "Podravina", "Varazdin", "Zagreb", "Karlovac", "Lika", "Rijeka", "Sisak", "Dalmacija", "Hrvatska", "Makedonija", "Bitola", "Kumanovo", "Ohrid", "Prilep", "Skopje", "Strumica", "Tetovo", "Veles", "Stip", "Slovenija", "Slovenija", "Slovenija", "Slovenija", "Slovenija", "Slovenija", "Slovenija", "Slovenija", "Slovenija", "Slovenija", "", "", "", "", "", "", "", "", "", "", "Centralna Srbija", "Beograd", "Sumadija", "Nis", "Juzna Morava", "Zajecar", "Podunavlje", "Podrinje i Kolubara", "Kraljevo", "Uzice", "Novi Sad", "Sombor", "Subotica", "", "", "Zrenjanin", "Pancevo", "Kikinda", "Ruma", "Sremska Mitrovica", "KiM", "Pristina", "Kosovska Mitrovica", "Pec", "Djakovica", "Prizren", "Kosovsko Pomoravski Okrug"];
    this.getPersonalInfo = function (){
        var strJmbg = this.jmbg;
        var day = parseInt(strJmbg.charAt(0) + strJmbg.charAt(1));
        var monthNum = parseInt(strJmbg.charAt(2) + strJmbg.charAt(3));
        var monthStr = function (){
            var month = monthNum - 1;
            var monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            return monthList[month];
        }
        
        var year = strJmbg.charAt(4) + strJmbg.charAt(5) + strJmbg.charAt(6);
        year = (year[0] === "0") ? 2 + year : 1 + year;
        var region = parseInt(strJmbg.charAt(7) + strJmbg.charAt(8));
        var sex = parseInt(strJmbg.charAt(9));
        sex = (sex < 5) ? "Male" : "Female";
        this.yearOfBirth = year;
        this.dayOfBirth = day;
        this.monthOfBirth = monthStr();
        this.sex = sex;
        this.regionOfBirth = this.regionArr[region];
        var result = "Greetings " + this.firstName + " " + this.lastName + ".\nYou are " + sex + ".\nDay of birth: " + day + ". " + monthStr() + " " + year + ".\nRegion of birth: " + this.regionArr[region] + ".";
        return result;
    }
}

var nebojsa = new person("Nebojsa", "Jovanovic", "1806992710061");
var nino = new person("Ninoslav", "Jovic", "1607991940079");
console.log(nebojsa.getPersonalInfo());






