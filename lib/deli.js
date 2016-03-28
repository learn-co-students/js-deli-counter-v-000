'use strict';

function line(katzDeli) {
  if (katzDeli.length === 0) {
    return "The line is currently empty.";
  } else {
    var arr = katzDeli.map(function(name, index){
      return (index + 1) + ". " + name;
    });
    return "The line is currently: " + arr.join(", ")
  }
};

function nowServing(katzDeli){
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return "Currently serving " + katzDeli.shift() + ".";
  }
};

function takeANumber(katzDeli, name){
  var number = katzDeli.length + 1;
  katzDeli.push(name)
  return "Welcome, " + name + ". You are number " + number + " in line.";
};




