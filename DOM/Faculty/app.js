var listOfFaculties = [];

//PERSON
function Person(name, surname) {
    this.name = name;
    this.surname = surname;
    this.id = (function () {
        return Math.floor((99999 - 10000) * Math.random() + 10000);
    })();
}

Person.prototype.getPersonData = function () {
    return this.name + " " + this.surname;
}

//EMPLOYEE
function Employee(name, surname, employeeId, salary) {
    Person.call(this, name, surname);
    this.employeeId = employeeId;
    this.salary = salary;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;


//PROFESSOR
function Professor(name, surname, employeeId, salary, officeNumber) {
    Employee.call(this, name, surname, employeeId, salary);
    this.officeNumber = officeNumber;
}

Professor.prototype = Object.create(Employee.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.getProfessorData = function () {
    return this.name + " " + this.surname + " " + this.employeeId;
}


//EXAM
function Exam(subject, professor, date, grade) {
    this.subject = subject;
    this.professor = professor;
    this.date = new Date(date);
    this.grade = grade || null;
}

Exam.prototype.getExamData = function () {
    //formatted string as first consonant of first word in subject name, date (in format dd.mm.yyyy.), status and grade
    var subjectNameLetter = this.subject.getFirstConsonant();
    var formatedDate = this.date.getDate() + "." + (this.date.getMonth() - 1) + "." + this.date.getFullYear();
    return subjectNameLetter + ", " + formatedDate + ", " + this.status + ", " + this.grade;
}


//STUDENT
function Student(name, surname, indexNumber, status) {
    Person.call(this, name, surname);
    this.indexNumber = indexNumber;
    this.status = status;
    this.listOfPassedExams = [];
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.addNewExam = function (exam, grade) {
    var newExam = Object.assign({}, exam);
    newExam.grade = grade;
    if (newExam.grade > 5) {
        this.listOfPassedExams.push(newExam);
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

Student.prototype.getStudentTenGrades = function () {
    var numberOfBig = 0;
    this.listOfPassedExams.forEach(function (elem) {
        if (elem.grade === 10) {
            numberOfBig++;
        }
    })
    return numberOfBig;
}

//FACULTY
function Faculty(name) {
    this.name = name;
    this.listOfStudents = [];
    this.listOfProfessors = [];
    this.listOfExams = [];
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

Faculty.prototype.getNumberOfTenGrades = function () {
    var numberOfGrades = 0;
    this.listOfStudents.forEach(function (elem) {
        numberOfGrades += elem.getStudentTenGrades();
    })
    return numberOfGrades;
}

//STUDENT-STATUS
var studentStatus = Object.freeze({
    regular: "REGULAR",
    remote: "REMOTE",
    graduated: "GRADUATED"
})

//GET FIRST CONSONANT IN STRING AND UPPERCASE IT
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

//FUNCTION THAT CREATES FACULTY
function createFaculty(name) {
    return new Faculty(name);
}

//FACULTY FORM SELECTORS
var facNameInput = document.querySelector("#facultyName");
var createFacBtn = document.querySelector("#createFacBtn");
var selectFac = document.querySelector("#selectFaculty");
var facultyList = document.querySelector("ol");

//ADD STUDENT AND PROFESSOR BUTTONS
var addStudentFormBtn = document.querySelector("#addStudent");
var addProfessorFormBtn = document.querySelector("#addProfessor");

//CREATE STUDENT AND PROFESSOR BUTTONS
var createStudentBtn = document.querySelector("#createStudent");
var createProfessorBtn = document.querySelector("#createProfessor");

//EXAM FORM SELECTORS
var examSubject = document.querySelector("#subject");
var examProfSelect = document.querySelector("#selectProfessor");
var examDate = document.querySelector("#examDate");
var createExamBtn = document.querySelector("#createExam");

//STUDENT FORM SELECTORS
var studentName = document.querySelector("#studentName");
var studentSurname = document.querySelector("#studentSurname");
var indexNumber = document.querySelector("#indexNumber");
var studentStatus = document.querySelector("#studentStatus");

//PROFESSOR FORM SELECTORS
var professorName = document.querySelector("#professorName");
var professorSurname = document.querySelector("#professorSurname");
var professorEmployeeId = document.querySelector("#employeeId");
var professorSalary = document.querySelector("#salary");
var professorOfficeNumber = document.querySelector("#officeNumber");

//STUDENT FORM TOGGLE FUNCTIONS
var showStudentDiv = function () { document.querySelector("#studentDiv").style.display = "block" };
var hideStudentDiv = function () { document.querySelector("#studentDiv").style.display = "none" };

//PROFESSOR FORM TOGGLE FUNCTIONS
var showProfessorDiv = function () { document.querySelector("#professorDiv").style.display = "block" };
var hideProfessorDiv = function () { document.querySelector("#professorDiv").style.display = "none" };

//CREATE FACULTY EVENT HANDLER
createFacBtn.addEventListener("click", function () {
    var newFac = createFaculty(facNameInput.value);
    var newFacOption = document.createElement("option");
    newFacOption.textContent = newFac.name;

    newFacOption.value = listOfFaculties.push(newFac) - 1;
    var newFacListItem = document.createElement("li");
    newFacListItem.textContent = newFac.name;

    selectFac.appendChild(newFacOption);
    facultyList.appendChild(newFacListItem);
    facNameInput.value = "";
})

//ADD STUDENT FORM TOGGLE
addStudentFormBtn.addEventListener("click", function () {
    hideProfessorDiv();
    showStudentDiv();
})

//ADD PROFESSOR FORM TOGGLE
addProfessorFormBtn.addEventListener("click", function () {
    hideStudentDiv();
    showProfessorDiv();
})

//CREATE EXAM EVENT HANDLER
createExamBtn.addEventListener("click", function () {
    var selectedFac = listOfFaculties[selectFac.value];

    var newExam = new Exam(examSubject.value, selectedFac.listOfProfessors[examProfSelect.value-1], examDate.value);

    if (selectedFac.listOfExams.objExists(newExam, subject)) {
        alert("that exam already exists");
        return
    }

    document.querySelector("#examForm").reset();
    selectedFac.listOfExams.push(newExam);
})

//CREATE STUDENT EVENT HANDLER
createStudentBtn.addEventListener("click", function () {
    var newStudent = new Student(studentName.value,
        studentSurname.value,
        parseInt(indexNumber.value),
        studentStatus.value
    );

    var selectedFac = listOfFaculties[selectFac.value];

    if (selectedFac.listOfStudents.objExists(newStudent, indexNumber)) {
        alert("student with that index number already exist");
        return
    }

    selectedFac.listOfStudents.push(newStudent);


    document.querySelector("#studentForm").reset();
    hideStudentDiv();
})

//CREATE PROFESSOR EVENT HANDLER
createProfessorBtn.addEventListener("click", function () {
    var newProfessor = new Professor(
        professorName.value,
        professorSurname.value,
        professorEmployeeId.value,
        parseInt(professorSalary.value),
        professorOfficeNumber.value
    );

    var newProfessorOption = document.createElement("option");
    newProfessorOption.textContent = newProfessor.name;

    newProfessorOption.value = listOfFaculties.push(newProfessor) - 1;

    examProfSelect.appendChild(newProfessorOption);

    var selectedFac = listOfFaculties[selectFac.value];

    if (selectedFac.listOfProfessors.objExists(newProfessor, employeeId)) {
        alert("professor with that employee ID already exist");
        return
    }

    selectedFac.listOfProfessors.push(newProfessor);

    document.querySelector("#professorForm").reset();
    hideProfessorDiv();
})

//ARRAY PROTOTYPE FUNCTION THAT CHECKS IF OBJECT ALREADY EXISTS IN ARRAY
Array.prototype.objExists = function (obj, propertie) {
    var exist = 0;
    this.forEach(function (element) {
        if (element.propertie === obj.propertie) {
            exist++;
        }
    })
    return (exist === 0) ? false : true;
}




