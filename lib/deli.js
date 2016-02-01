'use strict';

function line(lineArray) {
  if (lineArray.length == 0) {
    return 'The line is currently empty.';
  } else {
    var currentLine = [];
    lineArray.forEach(function(element, index) {
      currentLine.push((index + 1).toString() + ". " + element);
    });
    return "The line is currently: " + currentLine.join(", ");
  }
};

function nowServing(lineArray){
  if (lineArray.length == 0) {
    return 'There is nobody waiting to be served!';
  } else {
    var personServed = lineArray.shift();
    return 'Currently serving ' + personServed + ".";
  }
};

function takeANumber(line, person){
  line.push(person);
  return "Welcome, " + person + ". You are number " + (line.length) + " in line.";
};
