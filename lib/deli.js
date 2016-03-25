'use strict';

function line(theLine) {
  if (theLine.length == 0){
    return "The line is currently empty.";
      }
  else{
    var queue = [];
    theLine.forEach(function(person, index){
    queue.push((index + 1).toString() + ". " + person);
    });
    var response = "The line is currently: " + queue.join(", ")
    return response;
  }
};

function nowServing(theLine){
  if (theLine.length == 0){
    return "There is nobody waiting to be served!"
  }
  else {
    return "Currently serving " + theLine.shift() + ".";
  }
};

function takeANumber(theLine, person){
  var nextPosition = theLine.length + 1;
  var response = "Welcome, " + person + ". You are number " + nextPosition + " in line.";
  theLine.push(person);
  return response;
};

