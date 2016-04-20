'use strict';


function line(katzDeli) {
  if (katzDeli.length === 0) {
    return "The line is currently empty.";
  } else {
    var line = "The line is currently: ";
    katzDeli.forEach(function(cust, index) {
      line += (index + 1) + ". " + cust;
      if ((index + 1) < katzDeli.length ) {
        line += ", ";
      }
    });
    return line;
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




