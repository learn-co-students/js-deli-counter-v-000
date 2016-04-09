'use strict';

var ketzDeli = [];

function line(line) {
  if (line.length === 0){
    return "The line is currently empty."
  }else{
  var lineArray = [];
  line.forEach(function(name, index){
    lineArray.push((index+1)+ ". " + name)
  });
    return "The line is currently: " + lineArray.join(", ");
  }
};

function nowServing(line){
  if (line.length === 0){
    return "There is nobody waiting to be served!"
  }else{
    var response = "Currently serving " + line[0] + ".";
    line.splice(0,1);
    return response;
  }
};

function takeANumber(line, name){
  line.push(name);
  return "Welcome, " + name + ". You are number " + line.length + " in line.";
};
