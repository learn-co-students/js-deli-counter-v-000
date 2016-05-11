'use strict';

var katzDeli = [];

function line(katzDeli) {
  if (katzDeli.length === 0) {return "The line is currently empty.";}
  else {var linie = []; katzDeli.forEach(function(name, index) {linie.push((index + 1).toString() + ". " + name);});
  return "The line is currently: " + linie.join(", ");}
}

function nowServing(katzDeli) {
  if (katzDeli.length === 0) {return "There is nobody waiting to be served!"}
  else {var name = katzDeli.shift(); return "Currently serving " + name + ".";}
}

function takeANumber(katzDeli, name){
  katzDeli.push(name);
  var indexInLine = katzDeli.indexOf(name)+1;
  var antwort = "Welcome, " + name + ". You are number " + indexInLine + " in line.";
  return antwort
};
