'use strict';

var katzDeli = []

function line(katzDeli) {
  // your code here
  if (katzDeli.length === 0) {
    return "The line is currently empty.";
  } else {
     var queue = [];
      katzDeli.forEach(function(person, index){
        queue.push((index + 1).toString() + ". " + person);
      });
      return "The line is currently: " + queue.join(", ")
  }
};

function nowServing(katzDeli){
  // your code here
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
     var message = "Currently serving " + katzDeli[0] + ".";
     katzDeli.splice(0,1);
     return message;
  }
};

function takeANumber(katzDeli, name){
  // your code here
  katzDeli.push(name);
  return "Welcome, " + name + ". You are number " + katzDeli.length + " in line."
};
