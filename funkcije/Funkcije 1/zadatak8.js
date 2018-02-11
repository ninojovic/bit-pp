var givenArr = [15, 32, 334, 43, 32, 66];
function timesAppear(a){
    var counter = 0;
    for(var i=0;i<givenArr.length;i++){
        if (a === givenArr[i]){
            counter++;
        }
    }
    return console.log(counter);
}

timesAppear(15);