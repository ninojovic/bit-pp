var validateModule = (function (){

    Array.prototype.containsElement = function (elementToCheck) {
        var contains = 0;
        var parsedElement = JSON.stringify(elementToCheck);
        this.forEach(function (elem){
            if (JSON.stringify(elem) === parsedElement){
                contains++
            }
        })
        return contains !== 0;
    }

    Object.prototype.emptyOrInvalid = function (){
        var objArray = Object.values(this);
        var invalid = 0;
        objArray.forEach(function (elem){
            if (elem === "" || elem === "-" || typeof elem === "undefined"){
                invalid++
            }
        })
        return invalid !== 0;
    }

})();