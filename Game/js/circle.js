class Circle {
    constructor (x, y, r, color){
        this.x = x;
        this.y = y;
        this.r = r;
        this.color = color;
        this.points = Math.ceil(1/r*1000);
    }
}

export default Circle