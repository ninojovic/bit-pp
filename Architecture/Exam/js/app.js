var controllerModule = (function (form, exam, student, subject){

    $(form.selectors.addExam).on("click", function (){
        var collectedFormData = form.getFormData();
        
        if (!form.isValidData(collectedFormData)){
            form.invalid();
            return false;
        }
        var newStudent = student.createStudent(collectedFormData.name, collectedFormData.surname);
        var newSubject = subject.createSubject(collectedFormData.subject);
        var newExam = exam.createExam(newSubject, newStudent, collectedFormData.grade);
        
        form.addStudentToList(newExam);

    })

})(formModule, examModule, studentModule, subjectModule)