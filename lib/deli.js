'use strict';

function line(the_line) {
  if (the_line.length == 0){
    return "The line is currently empty.";
  } else {
    var queue = [];
    the_line.forEach(function(person, index){
    queue.push((index + 1).toString() + ". " + person);
    });
    var response = "The line is currently: " + queue.join(", ")
    return response;
  }
};

function nowServing(the_line){
  if (the_line,length == 0){
    return "There is nobody waiting to be served!"
  } else {
    return "Currently serving " +the_line.shift() + ".";
  }
};

function takeANumber(the_line, persons_name){
  var nextPosition = the_line.length +1;
  var response = "Welcome, " + persons_name + ". You are number " + nextPosition + " in line." the_line.push(person);
  return response;

};


