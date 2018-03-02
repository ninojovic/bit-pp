function Person(name, surname) {
    this.id = (function () {
        return Math.floor((99999 - 10000) * Math.random() + 10000);
    })();
    this.name = name;
    this.surname = surname;
}

Person.prototype.getPersonData = function () {
    return this.name + " " + this.surname;
}

function Employee(name, surname, employeeId, salary) {
    Person.call(this, name, surname);
    this.employeeId = employeeId;
    this.salary = salary;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

function Professor(name, surname, employeeId, salary, officeNumber) {
    Employee.call(this, name, surname, employeeId, salary);
    this.officeNumber = officeNumber;
}

Professor.prototype = Object.create(Employee.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.getProfessorData = function () {
    return this.name + " " + this.surname + " " + this.employeeId;
}

function Exam(subject, professor, date, grade) {
    this.subject = subject;
    this.professor = professor;
    this.date = new Date(date);
    this.grade = grade;
}

Exam.prototype.getExamData = function () {
    //formatted string as first consonant of first word in subject name, date (in format dd.mm.yyyy.), status and grade
    var subjectNameLetter = this.subject.getFirstConsonant();
    var formatedDate = this.date.getDate() + "." + (this.date.getMonth() - 1) + "." + this.date.getFullYear();
    return subjectNameLetter + ", " + formatedDate + ", " + this.status + ", " + this.grade;
}

function Student(name, surname, indexNumber, status) {
    Person.call(this, name, surname);
    this.indexNumber = indexNumber;
    this.status = status;
    this.listOfPassedExams = [];
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.addNewExam = function (exam) {
    if (exam.grade > 5) {
        this.listOfPassedExams.push(exam);
    }
    //When adding exam in previous method take care that grade must be greater than 5 and that we can not have more than 2 passed exams at same professor. Take care if exam is already in the list of passed exam (when student attends exam again) in that case you should replace data of that exam with new data.
}

Student.prototype.getStudentData = function () {
    return this.indexNumber + ", " + this.name + " " + this.surname + " average grade, " + this.getAverageGrade()
}

Student.prototype.getAverageGrade = function () {
    var average = 0;
    this.listOfPassedExams.forEach(function (elem) {
        average += elem.grade;
    })
    return average / this.listOfPassedExams.length;
}

Student.prototype.getStudentBigGrades = function () {
    var numberOfBig = 0;
    this.listOfPassedExams.forEach(function (elem) {
        if (elem.grade === 10) {
            numberOfBig++;
        }
    })
    return numberOfBig;
}

function Faculty(name) {
    this.name = name;
    this.listOfStudents = [];
    this.listOfProfessors = [];
    this.numberOfBigGrades = 0;
}

Faculty.prototype.addStudent = function (name, surname, indexNumber, status) {
    var student = new Student(name, surname, indexNumber, status);
    this.listOfStudents.push(student);
}

Faculty.prototype.addProfessor = function (name, surname, employeeId, salary, officeNumber) {
    var professor = new Professor(name, surname, employeeId, salary, officeNumber);
    this.listOfProfessors.push(professor);
}

Faculty.prototype.getNumberOfBigGrades = function () {
    var numberOfGrades = 0;
    this.listOfStudents.forEach(function (elem) {
        numberOfGrades += elem.getStudentBigGrades();
    })
    return numberOfGrades;
}

var studentStatus = Object.freeze({
    regular: "REGULAR",
    remote: "REMOTE",
    graduated: "GRADUATED"
})

String.prototype.getFirstConsonant = function () {
    var stringLowerCase = this.toLowerCase();
    var charList = stringLowerCase.split("");
    for (var i = 0; i < charList.length; i++) {
        var isConsonant = (charList[i] !== "a" && charList[i] !== "e" && charList[i] !== "o" && charList[i] !== "i" && charList[i] !== "u");
        if (isConsonant) {
            firstConsonant = charList[i];
            return charList[i].toUpperCase();
        }
    }
}

function createFaculty(name) {
    return new Faculty(name);
}

function createExam(subject, professor, date, grade) {
    return new Exam(subject, professor, date, grade);
}

var facNameInput = document.querySelector("#facultyName");
var createFacBtn = document.querySelector("#createFacBtn");
var selectFac = document.querySelector("#selectFaculty");
var facultyList = document.querySelector("ol");
var addStudentFormBtn = document.querySelector("#addStudent");
var addProfessorFormBtn = document.querySelector("#addProfessor");
var examSubject = document.querySelector("#subject");
var examProfSelect = document.querySelector("#selectProfessor");
var examDate = document.querySelector("#examDate");
var createExamBtn = document.querySelector("#createExam");
var createStudentBtn = document.querySelector("#createStudent");
var createProfessorBtn = document.querySelector("#createProfessor");

createFacBtn.addEventListener("click", function () {
    var newFac = createFaculty(facNameInput.value);
    var newFacOption = document.createElement("option");
    newFacOption.textContent = newFac.name;

    var newFacListItem = document.createElement("li");
    newFacListItem.textContent = newFac.name;

    selectFac.appendChild(newFacOption);
    facultyList.appendChild(newFacListItem);
    facNameInput.value = "";
})

addStudentFormBtn.addEventListener("click", function () {
    document.querySelector("#studentDiv").style.display = "block";
})

addProfessorFormBtn.addEventListener("click", function () {
    document.querySelector("#professorDiv").style.display = "block";
})

createExamBtn.addEventListener("click", function () {

})

createStudentBtn.addEventListener("click", function () {
    document.querySelector("#studentDiv").style.display = "none";

})

createProfessorBtn.addEventListener("click", function () {
    document.querySelector("#professorDiv").style.display = "none";
})