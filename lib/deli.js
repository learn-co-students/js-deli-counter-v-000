'use strict';

function line(deli) {
  if (deli.length === 0) {
    return "The line is currently empty.";
  } else {
    var list = "The line is currently:"
    deli.forEach(function(customer, index){
      list = list + " " + (index+1) + ". " + customer + ",";
    })
    return list.substring(0, list.length-1);
  }
};

function nowServing(deli){
  if (deli.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var current = deli[0];
    deli.shift();
    return "Currently serving " + current + ".";
  }
};

function takeANumber(deli, name){
  deli.push(name);
  var index = deli.indexOf(name) + 1;
  return "Welcome, " + name + ". You are number " + index + " in line."
};


