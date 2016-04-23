'use strict';

function line(lineOfPeople) {
  var line = "The line is currently"

  if (lineOfPeople.length === 0) {
    line += " empty.";
    return line;
  } else {
    line += ": "
    lineOfPeople.forEach(function(person, index){
      lineOfPeople[index] = (index + 1) + ". " + person;
    });

    return line + lineOfPeople.join(", ")
  }
};

function nowServing(lineOfPeople){
  if (lineOfPeople.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var nowServing = "Currently serving " + lineOfPeople.splice(0, 1) + ".";
    return nowServing;
  }
};

function takeANumber(lineOfPeople, person){
  lineOfPeople.push(person);
  return "Welcome, " + person + ". You are number " + lineOfPeople.length + " in line."
};


