var katzDeliLine = [];
var newPersonsName = "";

function takeANumber(katzDeliLine, newPersonsName){
  katzDeliLine.push(newPersonsName);
  var position = "Welcome, " + newPersonsName + "." + " You are number " + (katzDeliLine.indexOf(newPersonsName) + 1)  + " in line.";
  var i = 0;
  while(i < katzDeliLine){
    newPersonsName;
    i++;
}
  return position
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length == 0) {
     return "There is nobody waiting to be served!"

  } else {
    return "Currently serving " + katzDeliLine.shift() + "."
  }
}

function currentLine(katzDeliLine){
  var index;
  var i;
  var text = "";
    if (katzDeliLine.length == 0){
       return "The line is currently empty."
    }
    for(i = 1, index = 0; index < katzDeliLine.length; index++, i++){
          text +=  i + ". " + katzDeliLine[index] + (", ");
    }
        return "The line is currently: " + text.replace(/,\s*$/, "");
}
