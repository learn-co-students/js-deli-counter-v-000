'use strict';

function line(katzDeli) {
  // your code here
  if (katzDeli.length === 0) {
    return "The line is currently empty.";
  }
  else {
    var return_string = "The line is currently:";

    katzDeli.forEach(function(arr_name, index) {
      return_string += " " + (index + 1) + ". " + arr_name + ",";
    });

    return_string = return_string.slice(0, -1);

    return return_string;
  }
}

function nowServing(katzDeli) {
  // your code here
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    return "Currently serving " + katzDeli.shift() + ".";
  }
}

function takeANumber(katzDeli, name) {
  // your code here
  katzDeli.push(name);
  return "Welcome, " + name + ". You are number " + katzDeli.length + " in line.";
}