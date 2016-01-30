'use strict';


function line(arrayOfPeople) {
  if (arrayOfPeople == '') {
    return "The line is currently empty.";
  } else {
    var line = [];
    arrayOfPeople.forEach(function(person, index) {
      line.push((index + 1).toString() + ". " + person);
    });
    return "The line is currently: " + line.join(", ");
  }
}

function nowServing(arrayOfPeople){
  if (arrayOfPeople == '') {
    return "There is nobody waiting to be served!";
  } else {
    var person = arrayOfPeople[0];
    arrayOfPeople.shift();
    return "Currently serving " + person + ".";
  }
}

function takeANumber(arrayOfPeople, person){
  arrayOfPeople.push(person);
  return "Welcome, " + person + ". You are number " + (arrayOfPeople.length) + " in line.";
}
