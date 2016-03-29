'use strict';

function line(a) {
  if (a.length === 0) {
    return "The line is currently empty.";
  } else {
    var counter = [];
    a.forEach(function(name, index) {
      counter.push((index+1) + ". " + name);
    });
    return "The line is currently: " + counter.join(", ");
  }
}

function nowServing(a){
  if (a.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return "Currently serving " + a.shift() + ".";
  }
}

function takeANumber(a, name){
  a.push(name)
  return "Welcome, " + name + ". You are number " + (a.indexOf(name) + 1) + " in line.";
}


