function crte(a, b, c) {
    var res = "";
    for (var i = 1; i <= a; i++) {
        res += '*';
        if (i == a) {
            res += "\n"
        }
    }
    for (var j = 1; j <= b; j++) {
        res += "*";
        if (j == b) {
            res += "\n";
        }
    }
    for (var k = 1; k <= c; k++) {
        res += "*";
    }

    return res;

}
var res = crte(7, 4, 11);
console.log(res);