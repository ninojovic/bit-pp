function Person(name, surname, salary) {
    this.name = name;
    this.surname = surname;
    this.salary = salary;
}

Person.prototype.increaseSalary = function () {
    this.salary = this.salary + this.salary / 10;
}
Person.prototype.getData = function () {
    return this.name + " " + this.surname;
}

Person.prototype.getSalary = function () {
    return this.salary;
}

function Employee(name, surname, specialization, salary) {
    Person.call(this, name, surname, salary);
    this.specialization = specialization;
}

function Manager(name, surname, department, salary) {
    Person.call(this, name, surname, salary);
    this.department = department;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Manager.prototype = Object.create(Person.prototype);
Manager.prototype.constructor = Manager;

Employee.prototype.getSpecializaton = function () {
    return this.specialization;
}

Manager.prototype.getDepartment = function () {
    return this.department;
}

Manager.prototype.changeDepartment = function (newDepartment) {
    this.department = newDepartment;
}

var nino = new Manager("Ninoslav", "Jovic", "Head of FrontEnd", 500);
var nebojsa = new Employee("Nebojsa", "Jovanovic", "FrontEnd programmer",200);

console.log(nino.getSalary());
nino.increaseSalary();
console.log(nino.getSalary());




