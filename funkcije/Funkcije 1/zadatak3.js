function isThreeDigit(a){
    if(a>99 && a<1000){
        return true;
    }else{
        return false;
    }
}
console.log(isThreeDigit(541));
