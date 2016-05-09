'use strict';
function line(katzDeli) {
  if(katzDeli.length == 0){
    return "The line is currently empty.";
  } else {
    var tempLine = [];
    katzDeli.forEach(function(customer, position){
      tempLine.push((position + 1) + ". "+ customer);
    });
    return "The line is currently: " + tempLine.join(", ");
  }
}

function nowServing(katzDeli){
  var customer = katzDeli.shift();
  if (customer == undefined){
    return "There is nobody waiting to be served!"
  } else {
  return "Currently serving " + customer + ".";
  }
}

function takeANumber(katzDeli, name){
  katzDeli.push(name);
  var statement = "Welcome, " + name + ". You are number " + katzDeli.length + " in line.";
  return statement
}

