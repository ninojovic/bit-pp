var a=[15,3,20,9,23];
var sum=0;
var product=1;

for( var i=0; i<5;i++){
    sum += a[i];
    product *= a[i];
}

console.log("Zbir svih elemenata u array-u je: " +sum);
console.log("Proizvod svih elemenata u array-u je: " +product);
