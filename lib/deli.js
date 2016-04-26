'use strict';

function line(line){
  if (line.length === 0) {
    return "The line is currently empty.";
  }
  else {
    var lineStatus = "The line is currently: ";
    line.forEach(function(person, index) {
      lineStatus = lineStatus + (index + 1) + ". " + person + ", ";
    });
    return lineStatus.slice(0, -2);
  }
};

function nowServing(line){
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    return "Currently serving " + line.shift() + ".";
  }
};

function takeANumber(line, newPerson){
  line.push(newPerson);
  return "Welcome, " + newPerson + ". You are number " + line.length + " in line.";
};


