'use strict';

function line(katzDeli) {
  if (katzDeli.length == 0){
    return "The line is currently empty."
  }
  else {
    var string = "The line is currently: "
    katzDeli.forEach(function(person, index){
      string += (index + 1) + ". " + person + ", "
    });
    return string.slice(0,-2);
  }
};

function nowServing(katzDeli){
  if (katzDeli.length == 0){
    return "There is nobody waiting to be served!"
  }
  else {
    var person = katzDeli.shift();
    return "Currently serving " + person + '.';
  }
};

function takeANumber(katzDeli, newPerson){
  // your code here
  katzDeli.push(newPerson);
  var position = katzDeli.length
  return 'Welcome, '+ newPerson + '. You are number ' + position + ' in line.';
};
