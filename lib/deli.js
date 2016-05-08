'use strict';

function line(deli) {
  if (deli.length === 0){
    var response = "The line is currently empty.";
    return response;
  }
  else{
    var queue = [];
    deli.forEach(function(customer, index){
      queue.push((index +1).toString() + ". " + customer);
    });
    var response = "The line is currently: " + queue.join(", ");
    return response;
  }
};

function nowServing(deli){
  if(deli.length === 0){
    var response = "There is nobody waiting to be served!";
    return response;
  }
  else{
    var customer = deli.shift();
    var response = "Currently serving "+ customer +".";
    return response;
  }
};

function takeANumber(deli, customer){
  var customerNumber = deli.length + 1;
  var response = "Welcome, " + customer + ". You are number " + customerNumber + " in line.";
  deli.push(customer);
  return response;
};
