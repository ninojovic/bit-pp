let arrays = [[1, 2, 3],[4, 5],[6]];

let res = arrays.reduce((final, toFlat) => final.concat(toFlat));

console.log(res);

let bool = res.every(element => element % 2 === 0);

console.log(bool); 