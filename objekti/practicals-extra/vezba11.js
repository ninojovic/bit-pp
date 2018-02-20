//((max - min) * Math.random()) + min

function randomNumGenerator(min, max, numType){
    return (numType === "rounded") ? Math.floor((max - min) * Math.random() + min) : (max - min) * Math.random();
}

function arrGenerator(num, generatorF, numType, min, max){
    var min = min || 0;
    var max = max || 1000;
    var generatedArr = [];
    for (var i = 0; i <= num; i++){
        generatedArr.push(generatorF(min, max, numType))
    }
    return generatedArr;
}

console.log(arrGenerator(10, randomNumGenerator,"rounded", -50, 100));

