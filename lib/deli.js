'use strict';

function line(katzDeli) {
  if (katzDeli == "") {
    return "The line is currently empty.";
  } else {
    var line = []
    katzDeli.forEach(function(name, index){
      line.push((index + 1).toString() + ". " + name);
    });
  return "The line is currently: " + line.join(", ");
  }
}

function nowServing(katzDeli){
  if (katzDeli == "") {
    return "There is nobody waiting to be served!";
  } else {
    var customer = katzDeli[0];
    katzDeli.splice(0, 1);
    return "Currently serving " + customer + ".";
  }
}

function takeANumber(katzDeli, name){
  katzDeli.push(name);
  return "Welcome, " + name + ". You are number " + (katzDeli.length) + " in line.";
}


