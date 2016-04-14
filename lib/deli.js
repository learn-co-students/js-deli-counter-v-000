'use strict';

var katzDeli = [];

function line(katzDeli) {
  var queue = []
  if(katzDeli.length === 0){
    return "The line is currently empty.";
  } else {
    katzDeli.forEach(function(person, index){
      queue.push((index + 1).toString() + ". " + person + ",");
    });
  }
  var response = "The line is currently: " + queue.join(" ");
  response = response.substring(0, response.length-1);
  return response;
};

function nowServing(katzDeli){
  if(katzDeli.length === 0){
    return "There is nobody waiting to be served!";
  } else {
    var currentCustomer = katzDeli.shift();
    return "Currently serving " + currentCustomer + ".";
  }
};

function takeANumber(katzDeli, name){
  katzDeli.push(name);
  return "Welcome, " + name + ". You are number " + katzDeli.length + " in line.";
};


