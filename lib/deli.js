'use strict';

function line(line) {
  if (line.length > 0) {
    var output = "The line is currently: ";
    line.forEach(function(person, index){
      if (index !== 0) {
        output += ", ";
      }
      output += (index + 1);
      output += ". ";
      output += person;
    });
    return output;
  } else {
    return "The line is currently empty.";
  }
};

function nowServing(line){
  if (line.length > 0) {
    var nowServingPerson = line.splice(0, 1);
    return "Currently serving " + nowServingPerson + ".";
  } else {
    return "There is nobody waiting to be served!";
  }
};

function takeANumber(line, name) {
  line.push(name);
  return "Welcome, " + name + ". You are number " + line.length + " in line.";
};


