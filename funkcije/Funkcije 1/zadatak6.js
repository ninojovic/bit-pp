function chartStars(a,b,c){
    function chart(x){
        var chartString = "";
        for(var i=0;i<x;i++){
            chartString += "*";
        }
        return chartString;
    }

    console.log(chart(a));
    console.log(chart(b));
    console.log(chart(c));
}

chartStars(5,3,6);