'use strict';

function line(deli) {
 if (deli.length === 0){
   var response = "The line is currently empty.";
   return response;
 }
 else {
   var waiting = [];
   deli.forEach(function(name, index){
     waiting.push((index + 1).toString() + ". " + name);
   });
   var response = "The line is currently: " + waiting.join(", ");
   return response;
 }
};

function nowServing(deli){
  if(deli.length === 0){
    var response = "There is nobody waiting to be served!";
    return response;
  }
  else {
    var name = deli.shift();
    var response = "Currently serving " + name + ".";
    return response;
  }
};


function takeANumber(deli, name){
  var nextPosition = deli.length + 1;
  var response = "Welcome, " + name + ". You are number " + nextPosition + " in line.";
  deli.push(name);
  return response;
};
