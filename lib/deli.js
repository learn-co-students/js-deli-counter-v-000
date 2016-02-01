'use strict';


function line(katzDeli) {
  if (katzDeli == '') {
    return "The line is currently empty.";
  } else {
    var line = [];
    katzDeli.forEach(function(person, index) {
      line.push((index + 1).toString() + ". " + person);
    });
    return "The line is currently: " + line.join(", ");
  }
}

function nowServing(katzDeli){
  if (katzDeli == "") {
    return "There is nobody waiting to be served!";
  } else {
    var servingCustomer = katzDeli[0];
    katzDeli.shift();
    return "Currently serving " + servingCustomer + ".";
  }
};

function takeANumber(katzDeli, name){
  katzDeli.push(name);
  return "Welcome, " + name + ". You are number " + (katzDeli.length) + " in line.";
};


