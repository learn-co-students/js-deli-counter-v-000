'use strict';


function line(katzDeli) {
  if (katzDeli.length === 0) {
    return "The line is currently empty.";
  } else {
    var line = [];
    katzDeli.forEach(function(cust, index) {
      line.push((index + 1) + ". " + cust);
    });
    return "The line is currently: " + line.join(", ");
  }
};


function nowServing(katzDeli){
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return "Currently serving " + katzDeli.splice(0, 1) + ".";
  } 
};

function takeANumber(katzDeli, newCustName){
  katzDeli.push(newCustName);
  return "Welcome, " + newCustName + ". You are number " + (katzDeli.length) + " in line.";
};




