'use strict';

function line(lineOfPeople, person) {
  if (lineOfPeople == 0) {
    return "The line is currently empty.";
  }
  else {
    var thisLine = "The line is currently: ";
    lineOfPeople.forEach(function(name, index) {
      var place = index + 1;
      thisLine += place + ". " + name;
      if (place != lineOfPeople.length) {
        thisLine += ", ";
      }
    });
    return thisLine;
  }
};

function nowServing(lineOfPeople){
  if (lineOfPeople.length == 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    var serving = lineOfPeople[0];
    lineOfPeople.splice(0, 1);
    return "Currently serving " + serving + ".";
  }
};

function takeANumber(lineOfPeople, newPerson) {
  lineOfPeople.push(newPerson);
  var place = lineOfPeople.length;
  return "Welcome, " + newPerson + ". You are number " + place + " in line.";
};


