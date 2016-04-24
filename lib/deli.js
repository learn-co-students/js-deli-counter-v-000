'use strict';

function line(line) {
  if (line.length === 0){
    return "The line is currently empty.";
  } else {
    var current="";
// debugger;
    line.forEach(function(person, index) { 
      current = current + (index+1) + ". " + person + ", ";});
// debugger; 
    return "The line is currently: " + current.slice(0, -2);
  }
}

function nowServing(array){
  if (array.length === 0) {
    return "There is nobody waiting to be served!";
  } else {

    var nowServ = array[0];
    array.splice(0, 1);
    return 'Currently serving ' + nowServ + ".";
  }
}

function takeANumber(katzDeli, newPerson){
  katzDeli.push(newPerson);
  var number = katzDeli.indexOf(newPerson) + 1
  return "Welcome, " + newPerson + ". " + "You are number " + number + " in line.";
}


