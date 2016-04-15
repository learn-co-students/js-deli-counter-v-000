'use strict';

function line(katzDeli) {
  if (katzDeli.length === 0) {
    return "The line is currently empty."
  }
  else {
    var line = [];
    katzDeli.forEach(function(name, index) {
      line.push((index + 1) + ". " + name);
    });
    return "The line is currently: " + line.join(", ");
  }
};

function nowServing(katzDeli) {
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    return "Currently serving " + katzDeli.shift() + ".";
  }
};

function takeANumber(katzDeli, name) {
  katzDeli.push(name);
  var place = katzDeli.lastIndexOf(katzDeli[katzDeli.length - 1]); var place = place + 1;
  return "Welcome, " + name + ". You are number " + place + " in line.";
};
