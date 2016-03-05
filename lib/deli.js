'use strict';

function line(katzDeli) {
  if(katzDeli.length === 0){
    return "The line is currently empty.";
  }else{
    var line = []
     katzDeli.forEach(function(name, index){
       line.push((index + 1).toString() + ". " + name);
     });
   return "The line is currently: " + line.join(", "); 
  }
};

function nowServing(katzDeli){
  if(katzDeli.length === 0){
    return "There is nobody waiting to be served!";
  }else{
    var next = katzDeli.shift()
    return "Currently serving " + next +".";
  } 
};

function takeANumber(katzDeli, name){
  katzDeli.push(name);
  return "Welcome, " + name + ". You are number " + katzDeli.length + " in line.";
};


