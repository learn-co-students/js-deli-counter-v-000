'use strict';

var katzDeli = [];

function line(katzDeli) {
  if (katzDeli.length > 0) {
    var queue = [];
    katzDeli.forEach(function(name, index) {
      var number = index + 1;
      queue.push(number + ". " + name);
    });
    return "The line is currently: " + queue.join(", ");
  } else {
    return "The line is currently empty.";
  }
};

function nowServing(katzDeli){
  if (katzDeli.length >= 1) {
      var name = katzDeli[0];
      katzDeli.splice(0, 1);
      return "Currently serving " + name + ".";
  } else {
    return "There is nobody waiting to be served!";
  }
};

function takeANumber(katzDeli, name){
  katzDeli.push(name);
  return "Welcome, " + name + ". You are number " + katzDeli.length + " in line.";
};


