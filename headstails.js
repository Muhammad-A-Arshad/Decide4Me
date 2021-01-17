function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
   
function printYesNo(number) {
    var temp = document.getElementById('box');
    temp.innerHTML = number;
}
  
  var button = document.getElementById('coinflip');
  
  button.onclick = function() {
    var result = getRandomInt(1,2);
    var boolean1;

    if (result == 1){
        var boolean1 = "<br> Heads!";
    }

    else{
        var boolean1 = "<br> Tails!";
    }

    printYesNo(boolean1);
};