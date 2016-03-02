'use strict';

var katzDeli = [];

function line(katzDeli) {
  if (katzDeli === 'undefined' || katzDeli.length === 0){
    return "The line is currently empty."; 
  }
  else{
    var outputArray = [];
    katzDeli.forEach(function(person,index){
      outputArray.push(index+1 + ". " + person);
    });
    return ("The line is currently: ").concat(outputArray.join(", "));
  }
};

function nowServing(katzDeli){
  if (katzDeli === 'undefined' || katzDeli.length === 0){
    return "There is nobody waiting to be served!"; 
  }
  else{
    return "Currently serving " + katzDeli.shift() + ".";
  }
  
};

function takeANumber(katzDeli, customer){
  katzDeli.push(customer);
  return "Welcome, " + katzDeli[katzDeli.length-1] + ". " + "You are number " + katzDeli.length + " in line."; 
};


