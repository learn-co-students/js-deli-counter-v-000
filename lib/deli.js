'use strict';

function line(array) {
  if(array.length == 0) {
    return "The line is currently empty."
  }
  else{
  var newLine  = new Array();
  array.forEach(function(name,index) {
    var string = (index + 1) + ". " + name
    newLine.push(string)
  });
  return "The line is currently: " + newLine.join(", ");
  }
};

function nowServing(array){
  if(array.length == 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    var name = array.shift()
    return "Currently serving " + name + ".";
  }
};

function takeANumber(array, name){
  array.push(name)
  var index = array.length
  return "Welcome, " + name + ". You are number " + index + " in line.";
};


