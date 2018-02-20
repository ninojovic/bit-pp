function tripLength(str){
    var strArr = str.split(" ");
    var tripStart = new Date("January 1, 2018 " + strArr[0]);
    var tripEnd = new Date("January 1, 2018 " + strArr[1]);
    var startArr = [tripStart.getHours(), tripStart.getMinutes(), tripStart.getSeconds()];
    var endArr = [tripEnd.getHours(), tripEnd.getMinutes(), tripEnd.getSeconds()];
    return (endArr[0]-startArr[0]) + " hours " + (endArr[1]-startArr[1]) + " minutes " + (endArr[2]-startArr[2]) + " seconds"; 
}

console.log(tripLength("8:22:13 11:43:22"));
