var katzDeliLine = [];
var newPersonsName = "";
function takeANumber(katzDeliLine, newPersonsName){
  katzDeliLine.push(newPersonsName);
  var position = "";
  var i = 0;
  while(i < katzDeliLine){
    newPersonsName;
    i++;
}
  return position = "Welcome, " + newPersonsName + "." + " You are number " + (katzDeliLine.indexOf(newPersonsName) + 1)  + " in line."
}

function nowServing(katzDeliLine){
  if (katzDeliLine == 0) {
     return "There is nobody waiting to be served!"

  } else {
    return "Currently serving " + katzDeliLine.shift() + "."
  }
}

function currentLine(katzDeliLine){
   if (katzDeliLine == 0){
      return "The line is currently empty."
   } else {
     return "The line is currently: " + "1. " + katzDeliLine[0] + "," + " 2. " + katzDeliLine[1] + "," + " 3. " + katzDeliLine[2];
   }
}
