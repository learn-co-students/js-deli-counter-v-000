'use strict';

function line(currentLine) {
 if (currentLine.length === 0){
  return 'The line is currently empty.';
 }
 else {
  var list = [];
  currentLine.forEach(function(name, index){
    list.push((index + 1) + ". " + name);
  });
    var customers = list.join(', '); 
    return "The line is currently: " + customers;
  }
}


function nowServing(currentLine){
  if (currentLine.length === 0){
  return "There is nobody waiting to be served!";
 }
 else {
    var customer = currentLine[0];
    currentLine.splice(0, 1);
    return "Currently serving " + customer + ".";
  }
}

function takeANumber(currentLine, name){
  currentLine.push(name);
  var number = (currentLine.indexOf(name)) + 1;
  return "Welcome, " + name + ". You are number " + number + " in line.";
  
};


