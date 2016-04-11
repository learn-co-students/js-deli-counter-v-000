'use strict';

function line(katzDeli) {
  if (katzDeli.length == 0){
    return "The line is currently empty.";
  }
  else {
    var lineQueue = "The line is currently: ";
    katzDeli.forEach(function(name, index) {
      var number = index + 1;
      lineQueue += number + ". " + name;
      if (number != katzDeli.length) {
        lineQueue += ", ";
      }
    });
    return lineQueue;
  }
};

function nowServing(katzDeli) {
  if (katzDeli.length == 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    var name = katzDeli[0];
    katzDeli.splice(0, 1);
    return "Currently serving " + name + ".";
  }
};

function takeANumber(katzDeli, name) {
  katzDeli.push(name);
  var number = katzDeli.length;
  return "Welcome, " + name + ". You are number " + number + " in line.";
};


