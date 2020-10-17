/**let celsiusTemperature = 37;
let farenheitConversion = celsiusTemperature * 9/5 + 32;
function.log(farenheitConversion + '°F');**/
function gradeScore(score){
  
  if(score > 69 && score < 100){
    return "A";
  }
  else if (score > 59 && score < 70) {
    return "B"
  }
  else if (score > 49 && score < 60) {
    return "C"
  }
  else if (score > 44 && score < 50) {
    return "D"
  }
  else if (score > 39 && score < 45) {
    return "E"
  }
  else if(score > 0 && score < 40) {
    return "F";
  }
  else{
    return "Invalid score!!";
  }
 
};
console.log(gradeScore(40));


//pH Scale
let pHScale = function(scale){
  if(scale > 7 && scale < 14){
    return "Alkaline";
  }
  else if(scale === 0){
    return "neutral";
  }
  else if(scale < 7 && scale > -1){
    return "Acidic";
  }
  else{
    return "invalid!";
  }
}
console.log(pHScale(-1));