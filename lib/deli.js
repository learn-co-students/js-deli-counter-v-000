'use strict';

function line(katzDeli) {
  var currentLine = [];
  if (katzDeli == 0){
    return "The line is currently empty.";
  }
  else {
    for (var i = 0; i < katzDeli.length; i++){
      currentLine.push((i + 1) + ". " + katzDeli[i]);
    }
    return "The line is currently: " + currentLine.join(", ");
  };
};

function nowServing(katzDeli){
  if (katzDeli == 0){
    return "There is nobody waiting to be served!";
  }
  else {
    return "Currently serving " + katzDeli.shift() + ".";
  };
};

function takeANumber(katzDeli, name){
  katzDeli.push(name);
  return "Welcome, " + name + ". You are number " + (katzDeli.length) + " in line.";
};
