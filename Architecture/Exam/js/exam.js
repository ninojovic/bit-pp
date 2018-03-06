var examModule = (function (){
    
    function Exam (subject, student, grade){
        this.subject = subject;
        this.student = student;
        this.grade = parseInt(grade);
    }

    Exam.prototype.getExamInfo = function () {
        return this.subject.getSubjectName() + ", " + this.student.getStudentData();
    }

    Exam.prototype.hasPassed = function () {
        if (this.grade > 5) {
            return true;
        }
        return false;
    }

    function createExam (subject, student, grade){
        return new Exam(subject, student, grade);
    }


    return {
        createExam: createExam,
    }
})();