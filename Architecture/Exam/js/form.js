var formModule = (function () {

    var selectors = {
        subjectSelector: ".select-subject",
        studentInfoInput: ".student-name",
        examGrade: ".exam-grade",
        addExam: ".add-button",
        studentPassedList: ".student-passed",
        studentFailedList: ".student-failed",
        studentPassedChart: ".student-passed-chart",
        studentFailedChart: ".student-failed-chart",
    }

    function getFormData() {
        var subject = $(".select-subject").val();
        var studentInfoInput = $(".student-name").val();
        var examGrade = $(".exam-grade").val();

        return {
            subject: subject,
            nameAndSurname: studentInfoInput,
            name: splitFullName(studentInfoInput).name,
            surname: splitFullName(studentInfoInput).surname,
            grade: parseInt(examGrade),
        }
    }

    function isValidData(obj) {
        var validSubj = (obj.subject !== "-");
        var validNameAndSurname = isValidFullName(obj.nameAndSurname);
        var validGrade = (obj.grade < 11 && obj.grade > 0);

        return validSubj && validNameAndSurname && validGrade;
    }

    function splitFullName(fullName) {
        if (isValidFullName(fullName)){
        var full = fullName.split(" ");
        var name = full[0];
        var surname = full[1];
    } else {
        return false;
    }

        return {
            name: name,
            surname: surname
        }
    }

    function isValidFullName(string) {
        var newArr = string.split(" ");
        if (newArr.length === 2) {
            var name = newArr[0];
            var surname = newArr[1];
            var validNameLetter = (name.charAt(0) === name.charAt(0).toUpperCase());
            var validSurnameLetter = (surname.charAt(0) === surname.charAt(0).toUpperCase());

            return validNameLetter && validSurnameLetter;
        } else {
            return false;
        }
    }

    function addStudentToList(exam) {
        var li = $("<li>");
        li.text(exam.getExamInfo());
        if (exam.hasPassed()) {
            $(selectors.studentPassedList).append(li);
        } else {
            $(selectors.studentFailedList).append(li);
        }
        updateStatistics();
    }

    function updateStatistics() {
        var studentsPassed = $(selectors.studentPassedList).children().length;
        var studentsFailed = $(selectors.studentFailedList).children().length;

        $(selectors.studentPassedChart).text(studentsPassed + "");
        $(selectors.studentFailedChart).text(studentsFailed + "");

        $("h3").text("Total students:" + (studentsFailed + studentsPassed));

    }

    function alertInvalid(){
        alert("Invalid input");
        return false;
    }

    return {
        selectors: selectors,
        getFormData: getFormData,
        isValidData: isValidData,
        addStudentToList: addStudentToList,
        invalid: alertInvalid,
    }

})();