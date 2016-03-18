'use strict';

var katzDeli = [];

function line(katzDeli) {

  if(katzDeli.length === 0) {
    return "The line is currently empty.";
  } 
  else{
    var deliLine = [];
    var string = "The line is currently:"
    katzDeli.forEach(function(person, index){
      deliLine.push(" "+(index +1) + ". "+person);
    });
    return string + deliLine.toString();
  }
}

function nowServing(katzDeli){
  if(katzDeli.length === 0){
    return "There is nobody waiting to be served!";
  } 
  else{
    return "Currently serving " + katzDeli.shift() + ".";
  }
};

function takeANumber(katzDeli, person){
  katzDeli.push(person);
  return "Welcome, " + katzDeli[katzDeli.length-1] + ". You are number " 
  + katzDeli.length + " in line.";
};


