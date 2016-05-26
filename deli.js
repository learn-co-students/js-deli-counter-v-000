'use strict';

var katzDeli = [];

function takeANumber(array, name) {
  array.push(name);
  return "Welcome, " + name + ". You are number " + array.length + " in line.";
}

function nowServing(array) {
  if (array.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var first = array.shift();
    return "Currently serving " + first + ".";
  }
}

function currentLine(array) {
  if (array.length === 0) {
    return "The line is currently empty.";
  } else {
    var a = [];
    for (let person of array) {
      a.push(" " + (array.indexOf(person)+1) + ". " + person);

    }
    return "The line is currently:" + a.join();
  }
}