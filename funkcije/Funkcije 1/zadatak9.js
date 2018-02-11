var givenArr = [15, 32, 334, 43, 32, 66];
function oddSum(a){
    var sum=null;
    for(var i=0;i<a.length;i++){
        if (a[i]%2 !== 0) {
            sum += a[i];
        }
    }
    return console.log(sum);
}

oddSum(givenArr);