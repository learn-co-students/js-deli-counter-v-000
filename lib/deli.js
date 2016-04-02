'use strict';

function line(array) {
  if (array.length ===0) {
    var response = "The line is currently empty.";
    return response
  } else {
    var line = [];
    array.forEach(function(cust, index){
      line.push((index + 1).toString() +". " + cust);
    });
    var response = "The line is currently: " + line.join(", ")
    return response
  }
};

function nowServing(array){
  if (array.length ===0) {
    var response = "There is nobody waiting to be served!";

    return response
  } else {
    var response = "Currently serving " + array.shift() + ".";
    return response
  }
};

function takeANumber(array, name){
  var next = array.length + 1;
  array.push(name);
  var response = "Welcome, " + name + ". You are number " + next + " in line.";
  return response
};


