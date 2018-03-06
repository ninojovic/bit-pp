var studentModule = (function (){
    
    function Student(name, surname){
        this.name = name;
        this.surname = surname;
    }

    Student.prototype.getStudentData = function () {
        return this.name + " " + this.surname;
    }

    function createStudent (name, surname) {
        return new Student (name, surname);
    }

    return {
        createStudent: createStudent
    }

})();