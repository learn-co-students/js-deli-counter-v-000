'use strict';

function line(queue) {
  var lineStatus = "The line is currently";
  if (queue.length < 1) {
    return lineStatus + " empty.";
  } else {
    lineStatus = lineStatus + ":";
    queue.forEach(function(cust, index){
      lineStatus = lineStatus + " " + (index + 1) + ". " + cust + ",";
    });
    var len = lineStatus.length - 1;
    lineStatus = lineStatus.slice(0, len);
  }
  return lineStatus;
}

function nowServing(queue){
  if (queue.length < 1) {
    return "There is nobody waiting to be served!";
  } else {
    var current = queue.splice(0, 1);
    return "Currently serving " + current + ".";
  }
};

function takeANumber(queue, newCust){
  queue.push(newCust);
  return "Welcome, " + newCust + ". You are number " + queue.length + " in line.";
};


