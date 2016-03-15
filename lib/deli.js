'use strict';

function line(deli) {
  if (deli.length == 0) {
    return "The line is currently empty.";
  } else {
    var current_line = "The line is currently: ";
    deli.forEach(function(element, index) {
      var number = index + 1;
      current_line += number + ". " + element;
      if (number != deli.length) {
        current_line += ", ";
      }
    });
    return current_line;
  };
};

function nowServing(deli){
  if (deli.length == 0) {
    return "There is nobody waiting to be served!";
  } else {
    var now_serving = "Currently serving " + deli[0] + ".";
    deli = deli.splice(0,1);
    return now_serving;
  }
};

function takeANumber(deli, name){
  deli.push(name);
  return "Welcome, " + name + ". You are number " + deli.length + " in line.";
};


