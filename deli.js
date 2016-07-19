'use strict';

var katzDeliLine = [];

function takeANumber(katzDeliLine, personName) {
  katzDeliLine.push(personName);
  var spot = katzDeliLine.length;
  return "Welcome, " + personName + ". You are number " + spot + " in line.";
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length == 0) {
    return "There is nobody waiting to be served!";
  } else {
    var person = katzDeliLine.shift(); // removes 1st item of []
    return "Currently serving " + person + ".";
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length == 0) {
    return "The line is currently empty.";
  } else {
    var string = "The line is currently: "
    katzDeliLine.forEach(function(person, index) {
      string += (index + 1) + ". " + person + ", "
    });
    return string.slice(0, -2);
  }
}
