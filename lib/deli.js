'use strict';

function line(array) {
  if (array.length === 0) {
    return "The line is currently empty.";
  } else {
    var response = "The line is currently: ";
    array.forEach(function(person, index) {
      if (index === array.length-1) {
        response += (index + 1) + ". " + person;
      } else {
        response += (index + 1) + ". " + person + ", ";
      }
    });
  }
  return response;
};

function nowServing(array) {
  if (array.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var nextUp = array.shift();
    return "Currently serving " + nextUp + ".";
  }
};

function takeANumber(array, person) {
  array.push(person);
  return "Welcome, " + person + ". You are number " + array.length + " in line.";
};


