function sqrStars(a){
    var starsString="";
    for(var i=0;i<a;i++){
        starsString += "\n";
        for(var j=0;j<a;j++){
            if (i===0 || i===(a-1)){
                starsString += "*";
            } else {
                if (j===0 || j===(a-1)){
                    starsString += "*";
                } else {
                    starsString += " ";
                }
            }
        }
    }
    console.log(starsString);
}
sqrStars(7);

/*    
      j0 j1 j2 j3 j4
i0    *  *  *  *  *
i1    *           *
i2    *           *
i3    *           *
i4    *  *  *  *  *

*/