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
    this.unformatedDate = new Date(date);
    this.date = this.getFormatedDate();
    this.grade = grade || "TBD";
}

Exam.prototype.getExamData = function () {
    var subjectNameLetter = this.subject.getFirstConsonant();
    return subjectNameLetter + ", " + this.getFormatedDate() + ", " + this.status + ", " + this.grade;
}

Exam.prototype.getFormatedDate = function () {
    var formatedDate = this.unformatedDate.getDate() + "." + (this.unformatedDate.getMonth() - 1) + "." + this.unformatedDate.getFullYear();
    return formatedDate;
}

Exam.prototype.getExamInfo = function () {
    return this.subject + ", profesor: " + this.professor.name + " " + this.professor.surname;
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
    newExam.grade = parseInt(grade);

    if (newExam.grade > 5) {
        this.listOfPassedExams.push(newExam);
        return true;
    } else {
        return false;
    }
}

Student.prototype.replaceExam = function (exam, grade, index) {
    var newExam = Object.assign({}, exam);
    newExam.grade = parseInt(grade);
    this.listOfPassedExams[index] = newExam;
    return false;
}

Student.prototype.getArrayOfExamInfo = function () {
    var newArr = [];
    this.listOfPassedExams.forEach(function (elem) {
        var innerArr = [];
        innerArr.push(elem.subject);
        innerArr.push(elem.professor.name + " " + elem.professor.surname);
        innerArr.push(elem.grade);
        innerArr.push(elem.date);
        newArr.push(innerArr);
    })
    return newArr;
}

Student.prototype.getStudentInfo = function () {
    return this.name + " " + this.surname + ", index number: " + this.indexNumber;
}

Student.prototype.getStudentData = function () {
    return this.indexNumber + ", " + this.name + " " + this.surname + " average grade, " + this.getAverageGrade()
}

Student.prototype.getAverageGrade = function () {
    var average = 0;
    this.listOfPassedExams.forEach(function (elem) {
        average += elem.grade;
    })
    return (average / this.listOfPassedExams.length).toFixed(1);
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
var cancelStudentForm = document.querySelector("#cancelStudent");

//PROFESSOR FORM SELECTORS
var professorName = document.querySelector("#professorName");
var professorSurname = document.querySelector("#professorSurname");
var professorEmployeeId = document.querySelector("#employeeId");
var professorSalary = document.querySelector("#salary");
var professorOfficeNumber = document.querySelector("#officeNumber");
var cancelProfessorForm = document.querySelector("#cancelProfessor");

//ADD EXAM TO STUDENT FORM SELECTORS
var selectFacultyExamForm = document.querySelector("#selectFacultyExam");
var addStudentExamBtn = document.querySelector("#addStudentExam");
var selectStudent = document.querySelector("#selectStudent");
var selectExam = document.querySelector("#selectExam");
var selectGradeList = document.querySelectorAll("input[type='radio']");

//GET STUDENT INFO FORM SELECTORS
var selectFacultyInfo = document.querySelector("#selectFacultyInfo");
var selectStudentInfo = document.querySelector("#selectStudentInfo");
var getStudentInfoBtn = document.querySelector("#getInfo");

//STUDENT FORM TOGGLE SELECTORS
var studentFormDiv = document.querySelector("#studentDiv");
var professorFormDiv = document.querySelector("#professorDiv");
var backgroundFormDiv = document.querySelector("background");

//STUDENT FORM TOGGLE FUNCTIONS
var showStudentDiv = function () {
    studentFormDiv.style.display = "block";
    backgroundFormDiv.style.display = "block"

};

var hideStudentDiv = function () {
    studentFormDiv.style.display = "none";
    backgroundFormDiv.style.display = "none"
};

//PROFESSOR FORM TOGGLE FUNCTIONS
var showProfessorDiv = function () {
    professorFormDiv.style.display = "block";
    backgroundFormDiv.style.display = "block"
};

var hideProfessorDiv = function () {
    professorFormDiv.style.display = "none";
    backgroundFormDiv.style.display = "none"
};

//CREATE FACULTY EVENT HANDLER
createFacBtn.addEventListener("click", function () {
    if (!isValidForm("#facultyForm")) {
        alert("Please fill all the required fields!")
        return false;
    }

    var newFac = createFaculty(facNameInput.value);

    var newFacListIndex = listOfFaculties.push(newFac) - 1;

    function createFacultyOption() {
        var newFacOption = document.createElement("option");
        newFacOption.textContent = newFac.name;
        newFacOption.value = newFacListIndex;

        return newFacOption;
    }


    var newFacListItem = document.createElement("li");
    newFacListItem.textContent = newFac.name;

    function facultyExistCallback(facultyInList) {
        return facultyInList.name === newFac.name;
    }

    selectFac.appendChild(createFacultyOption());
    selectFacultyExamForm.appendChild(createFacultyOption());
    selectFacultyInfo.appendChild(createFacultyOption());
    facultyList.appendChild(newFacListItem);
    facNameInput.value = "";
})

//ADD STUDENT FORM TOGGLE
addStudentFormBtn.addEventListener("click", function () {
    if (!isValidForm("#selectFacultyForm")) {
        alert("Please fill all the required fields!")
        return false;
    }
    showStudentDiv();
})

//ADD PROFESSOR FORM TOGGLE
addProfessorFormBtn.addEventListener("click", function () {
    if (!isValidForm("#selectFacultyForm")) {
        alert("Please select Faculty")
        return false;
    }
    showProfessorDiv();
})

//CANCEL STUDENT FORM TOGGLE
cancelStudentForm.addEventListener("click", hideStudentDiv);

//CANCEL PROFESSOR FORM TOGGLE
cancelProfessorForm.addEventListener("click", hideProfessorDiv);

//CREATE EXAM EVENT HANDLER
createExamBtn.addEventListener("click", function () {
    if (!isValidForm("#examForm")) {
        alert("Please select Faculty")
        return false;
    }
    var selectedFac = listOfFaculties[selectFac.value];

    var newExam = new Exam(examSubject.value, selectedFac.listOfProfessors[examProfSelect.value - 1], examDate.value);

    function examExistCallback(examInList) {
        var sameSubject = examInList.subject === newExam.subject;
        var sameProfessor = examInList.professor.employeeId === newExam.professor.employeeId;
        return sameSubject && sameProfessor;
    }

    if (selectedFac.listOfExams.containsElement(examExistCallback)) {
        alert("that exam already exists");
        return false;
    }

    var examListIndex = selectedFac.listOfExams.push(newExam) - 1;

    var newExamOption = document.createElement("option");
    newExamOption.textContent = newExam.getExamInfo();
    newExamOption.value = examListIndex;

    selectExam.appendChild(newExamOption);

    document.querySelector("#examForm").reset();
})

//CREATE STUDENT EVENT HANDLER
createStudentBtn.addEventListener("click", function () {
    if (!isValidForm("#studentForm")) {
        alert("Please fill all the required fields!")
        return false;
    }

    var newStudent = new Student(studentName.value,
        studentSurname.value,
        parseInt(indexNumber.value),
        studentStatus.value
    );

    var selectedFac = listOfFaculties[selectFac.value];

    function studentExistCallback(studentInList) {
        return studentInList.indexNumber === newStudent.indexNumber;
    }

    if (selectedFac.listOfStudents.containsElement(studentExistCallback)) {
        alert("student with that index number already exist");
        return false;
    }

    var studentListIndex = selectedFac.listOfStudents.push(newStudent) - 1;

    function createStudentOption() {
        var newStudentOption = document.createElement("option");
        newStudentOption.textContent = newStudent.getStudentInfo();
        newStudentOption.value = studentListIndex;
        return newStudentOption;
    }


    selectStudent.appendChild(createStudentOption());
    selectStudentInfo.appendChild(createStudentOption());

    document.querySelector("#studentForm").reset();
    hideStudentDiv();
})

//CREATE PROFESSOR EVENT HANDLER
createProfessorBtn.addEventListener("click", function () {
    if (!isValidForm("#professorForm")) {
        alert("Please fill all the required fields!")
        return false;
    }
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

    function professorExistCallback(professorInList) {
        return professorInList.employeeId === newProfessor.employeeId;
    }

    if (selectedFac.listOfProfessors.containsElement(professorExistCallback)) {
        alert("professor with that employee ID already exist");
        return false;
    }

    selectedFac.listOfProfessors.push(newProfessor);

    document.querySelector("#professorForm").reset();
    hideProfessorDiv();
})

//ADD EXAM TO STUDENT EVENT HANDLER
addStudentExamBtn.addEventListener("click", function () {
    if (!isValidForm("#studentExamForm")) {
        alert("Please fill all the required fields!")
        return false;
    }

    var selectedFac = listOfFaculties[selectFacultyExamForm.value];
    var selectedStudent = selectedFac.listOfStudents[selectStudent.value];
    var selectedExam = selectedFac.listOfExams[selectExam.value];

    function getCheckedRadio() {
        var checkedValue = null;
        selectGradeList.forEach(function (elem) {
            if (elem.checked) {
                ;
                checkedValue = elem.value;
            }
        })
        return checkedValue;
    }

    var grade = getCheckedRadio();

    //CHECK IF EXAM EXISTS AND IF IT IS REPLACE OLD EXAM WITH NEW
    function passedExamExistsCallback(examInList) {
        var sameSubject = examInList.subject === selectedExam.subject;
        var sameProfessor = examInList.professor === selectedExam.professor;
        return sameSubject && sameProfessor;
    }

    if (selectedStudent.listOfPassedExams.containsElement(passedExamExistsCallback)) {
        selectedStudent.listOfPassedExams.forEach(function (e, i) {
            if (e.subject === selectedExam.subject && e.professor === selectedExam.professor) {
                selectedStudent.replaceExam(selectedExam, grade, i);
                return false;
            }
        })
    } else {
        var success = selectedStudent.addNewExam(selectedExam, grade);
        if (!success) {
            alert("Can't add exam if student didn't passed!");
            return false;
        }
    }
    
    document.querySelector("#studentExamForm").reset();
})

//GETTING STUDENT INFO EVENT HANDLER
getStudentInfoBtn.addEventListener("click", function () {
    var selectedFaculty = listOfFaculties[selectFacultyInfo.value];
    var selectedStudent = selectedFaculty.listOfStudents[selectStudentInfo.value];
    var tableHeadArray = ["Name", "Surname", "Status", "Index Number", "Average Grade"];
    var examInfoArray = ["subject", "professor", "grade", "date"];
    var studentInfoArray = [selectedStudent.name,
    selectedStudent.surname,
    selectedStudent.status,
    selectedStudent.indexNumber,
    selectedStudent.getAverageGrade()
    ];


    //CREATING TABLE WITH STUDENT INFO
    var table = document.createElement("table");

    var createEl = function (tableElem) { return document.createElement(tableElem) };

    //APPENDING STUDENT INFO
    for (var i = 0; i < 2; i++) {
        var tableRow = createEl("tr");
        if (i === 0) {
            tableHeadArray.forEach(function (elem) {
                var tableHead = createEl("th");
                tableHead.textContent = elem;
                tableRow.appendChild(tableHead);
            })
        } else {
            studentInfoArray.forEach(function (elem) {
                var tableData = createEl("td");
                tableData.textContent = elem;
                tableRow.appendChild(tableData);
            })
        }
        table.appendChild(tableRow);
    }

    //APPENDING EXAM INFO
    for (var i = 0; i < 2; i++) {
        if (i === 0) {
            var tableRow = createEl("tr");
            examInfoArray.forEach(function (elem) {
                var tableHead = createEl("th");
                tableHead.textContent = elem;
                tableRow.appendChild(tableHead);
            })
            table.appendChild(tableRow);
        } else {
            selectedStudent.getArrayOfExamInfo().forEach(function (elem) {
                var tableRow = createEl("tr");
                elem.forEach(function (e) {
                    var tableData = createEl("td");
                    tableData.textContent = e;
                    tableRow.appendChild(tableData);
                })
                table.appendChild(tableRow);
            })
        }
    }

    if (document.querySelector("table")) {
        var tableToRemove = document.querySelector("table");
        document.querySelector("#infoDiv").removeChild(tableToRemove);
    }

    document.querySelector("#infoDiv").appendChild(table);
})

//ARRAY METHOD THAT CHECKS IF ELEMENT ALREADY EXISTS
Array.prototype.containsElement = function (callback) {
    var contains = 0;
    this.forEach(function (e) {
        if (callback(e)) {
            contains++;
        }
    })
    return contains !== 0;
}

//FUNCTION THAT CHECKS IF FORM IS FILLED
function isValidForm(formSelector) {
    var formList = document.querySelectorAll(formSelector + " input, " + formSelector + " select");
    var invalid = 0;
    formList.forEach(function (element) {
        if (element.value === "" || element.value === "-") {
            element.style.border = "solid 3px red";
            invalid++;
        } else {
            element.style.border = "solid 1px gray";
        }
    })
    return invalid === 0;
}