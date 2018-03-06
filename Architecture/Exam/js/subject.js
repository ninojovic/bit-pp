var subjectModule = (function (){
    
    function Subject (name) {
        this.name = name;
    }

    Subject.prototype.getSubjectName = function (){
        return this.name;
    }

    function createSubject (name){
        return new Subject(name);
    }

    return {
        createSubject: createSubject,
    }
})();