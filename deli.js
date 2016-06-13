'use strict';

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var name= katzDeliLine[0];
    katzDeliLine.shift();
    return "Currently serving " + name+ ".";
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    var line = "The line is currently: ";
    var fullLine = [];
    katzDeliLine.forEach(function(person, index){
      fullLine.push((index+1) + ". " + person);
    });
    return line + fullLine.join(", ");
  }
}
