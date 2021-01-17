function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
   
function printNumber(number) {
    var temp = document.getElementById('box');
    temp.innerHTML = number;
}
  
  var button = document.getElementById('rolldice');
  
  button.onclick = function() {
    var result = getRandomInt(1,6);
    printNumber("<br>   " + result);
};