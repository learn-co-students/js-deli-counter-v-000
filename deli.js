"use strict";

function takeANumber(katzDeliLine, name) {
  var postion = katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + postion + " in line.";
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length < 1) {
    return "There is nobody waiting to be served!";
  }

  var currentPerson = katzDeliLine[0];
  katzDeliLine.splice(0,1);
  return "Currently serving " + currentPerson + ".";
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length < 1) {
    return "The line is currently empty.";
  }

  var line = "";

  katzDeliLine.forEach(function (person, index) {
    var start = (index == 0)? " " : ", ";
    line += start + (index + 1) + ". " + person
  });

  return "The line is currently:" + line
}
