var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27]];
var resultString = ""

for(var i=0; i<3; i++){
    for(var j=0; j<4; j++){
        resultString += a[i][j] + ", ";
    }
}
console.log(resultString);