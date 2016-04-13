'use strict';

function line(line) {
  if (line.length == 0) {
    return "The line is currently empty.";
  } else {
    var line = line.join(", ").split(" ");
    var info = "The line is currently:";
    for (var i = 0; i < line.length; i++) {info += " " + (i+1) + ". " + line[i];}
    return info;
  }
}

function nowServing(line){
  return line.length > 0 ? "Currently serving " + line.shift() + "." : "There is nobody waiting to be served!";
};

function takeANumber(line, person){
  line.push(person);
  return "Welcome, " + person + ". You are number " + line.length + " in line.";
};
