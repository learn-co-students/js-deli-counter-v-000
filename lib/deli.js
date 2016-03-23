'use strict';

function line(katzDeli) {
  if (katzDeli.length == 0) {
    return "The line is currently empty.";
  } else {
    var currentLine = [];
    katzDeli.forEach(function(customer, index) {
      currentLine.push((index + 1) + ". " + customer);
    });
    return "The line is currently: " + currentLine.join(", ");
  }
};

function nowServing(katzDeli){
  if (katzDeli.length == 0) {
    return "There is nobody waiting to be served!";
  } else {
    var firstInLine = katzDeli.shift();
    return "Currently serving " + firstInLine + ".";
  }
};

function takeANumber(katzDeli, name){
  katzDeli.push(name);
  return "Welcome, " + name + ". " + "You are number " + katzDeli.length + " in line.";
};


