function NewPoint(x,y,z) {
    this.x = x;
    this.y = y;
    this.z = z; 
}

var point1 = new NewPoint(3, 5, 1);
var point2 = new NewPoint(5, 4, 1);

function calcDist(p1, p2) {
    var d = Math.sqrt(Math.pow(p1.x - p2.x ,2) + Math.pow(p1.y - p2.y , 2) + Math.pow(p1.z - p2.z, 2));
    return d;
}

console.log(calcDist(point1, point2));

