function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
   
function printYesNo(number) {
    var temp = document.getElementById('box');
    temp.innerHTML = number;
}
  
  var button = document.getElementById('8ball');
  
  button.onclick = function() {
    var result = getRandomInt(1,7);
    var boolean1;

    if (result == 1){
        var boolean1 = "<br> Yes!";
    }

    else if (result == 2){
        var boolean1 = "<br> No!";
    }

    else if (result == 3){
        var boolean1 = "<br> Certainly";
    }

    else if (result == 4){
        var boolean1 = "Ask <br> Again";
    }

    else if (result == 5){
        var boolean1 = "<br> Never!";
    }

    else if (result == 6){
        var boolean1 = "<br>Doubtful";
    }

    else{
        var boolean1 = "For <br> Sure";
    }

    printYesNo(boolean1);
};