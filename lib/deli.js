'use strict';

function line(deliLine) {
  var pplInLine = [];
  if (deliLine.length === 0) {
    return "The line is currently empty.";
  }else {
    for (var i = 0; i < deliLine.length; i++){
      pplInLine.push((i + 1) + ". " + deliLine[i]);
    }
    var line = "The line is currently: " + pplInLine.join(", ");
    return line;
  }
}

function nowServing(deliLine){
  if (deliLine.length === 0) {
    return 'There is nobody waiting to be served!';
  }else {
    var name = deliLine.shift()
    var serving = "Currently serving " + name + ".";
    return serving;
  }
};

function takeANumber(deliLine, name){
  var welcome = "Welcome, " + name + ". You are number " + (deliLine.length + 1) + " in line.";
  deliLine.push(name);
  return welcome;
};
