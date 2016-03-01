'use strict';

function line(line) {
  // your code here
  var status = "The line is currently empty.";
  if(line.length>0) {
    status = "The line is currently: ";
    line.forEach(function(name, index){
      status+=(index+1);
      status+=(". "+name)
      if(index!==line.length-1){
        status+=", ";
      }
    });
  }

  return status;
};

function nowServing(line){
  // your code here
  var status = "There is nobody waiting to be served!";
  if(line.length>0){
    status = "Currently serving ";
    var person = line.shift();
    status += person;
    status +="."
  }
  return status;
};

function takeANumber(deli, person){
  var nextPosition = deli.length + 1;
  var response = "Welcome, " + person + ". You are number " + nextPosition + " in line.";
  deli.push(person);
  return response;
};



