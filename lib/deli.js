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

function nowServing(){
  // your code here
};

function takeANumber(){
  // your code here
};
