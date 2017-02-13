'use strict';

var katzDeli=[]
function takeANumber(katzDeliLine, name){
  var place = katzDeliLine.length
  katzDeliLine.push(name)
  var linePlace = place + 1

  return "Welcome, " + name +". You are number " + linePlace + " in line."
}

function nowServing(katzDeliLine) {
if (katzDeliLine.length == 0) {
    return "There is nobody waiting to be served!"

  } else {
    return `Currently serving ${katzDeliLine.shift()}.`
  }

}

function currentLine(line) {
if (line.length == 0) {
  return "The line is currently empty."
} else {
    var names = [];
    line.forEach(function(name, index){
      var number = index + 1;
      names.push(number + ". " + name)

    })

  return `The line is currently: ${names.join(", ")}`;
}
}

//create empty array
//push both name and index into empty array
//return eveything in array sequentially into the line that starts with "the line is currently"
