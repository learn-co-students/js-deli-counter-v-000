'use strict';

var katzDeli = [];

function line(array) {
  if (array.length == 0) {
    return "The line is currently empty."
  }
  else {
    var lines = [];
    array.forEach(function(name, index){
      lines.push((index + 1).toString() + ". " + name);
    });
    return "The line is currently: " + lines.join(", "); 
  }
};

function nowServing(array){
  if (array.length == 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    return "Currently serving " + array.splice(0,1) + ".";
  }
};

function takeANumber(array, name){
  array.push(name);
  return 'Welcome, ' + name + '. You are number ' + array.length + ' in line.'
};


