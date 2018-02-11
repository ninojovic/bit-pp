var t = "How many times do A appear in TAMARA?";
function timesInString(string, a){
    var counter = 0;
    for(var i=0;i<string.length;i++ ){
        if(string[i] === a){
            counter++;
        }
    }
  return console.log(counter);
}

timesInString(t, "e");