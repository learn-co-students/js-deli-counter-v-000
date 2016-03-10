'use strict';

function line(deli) {
  // your code here
  if(deli.length === 0){
    return "The line is currently empty.";
  } else {
    var string = 'The line is currently: ';
    deli.forEach(function(personInLine, index){
      if(index !== deli.length - 1){
        string = string + (index + 1) + '. ' + personInLine + ', ';
      } else {
        string = string + (index + 1) + '. ' + personInLine;
      }
    });
    return string
  }
};

function nowServing(deli){
  // your code here
  if(deli.length === 0){
    return "There is nobody waiting to be served!"
  } else {
    var string = "Currently serving " + deli[0] + ".";
    deli.splice(0,1);
    return string
  }
};

function takeANumber(deli,person){
  // your code here
  deli.push(person);
  var string = "Welcome, " + person + ". You are number " + deli.length + " in line.";
  return string
};


