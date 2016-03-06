'use strict';

function line(katzDeli) {
  if (katzDeli.length == 0) {
    return "The line is currently empty.";
  } else {

    var lineNames = [];
    katzDeli.forEach(function(name, index) {
      lineNames.push(" " + (index + 1) + ". " + name);
    });
    return "The line is currently:" + lineNames.join(",")
  }
};

function nowServing(katzDeli){
  if (katzDeli.length == 0) {
    return "There is nobody waiting to be served!";
  } else {
    name = katzDeli[0];
    katzDeli.shift();
    return "Currently serving " + name + ".";
  }
};

function takeANumber(katzDeli, name){
  katzDeli.push(name);
  return "Welcome, " + name + ". You are number " + katzDeli.length + " in line."
};
