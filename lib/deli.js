'use strict';

function line(ary){
    if(ary.length === 0){
      return "The line is currently empty.";
    }else{
      var line = [];
      ary.forEach(function(person, index){
        line.push((index + 1).toString() + ". " + person);
      });
      return "The line is currently: " + line.join(", ")
    }
};

function nowServing(line){
  if(line.length > 0){
    var serving = line.splice(0,1);
    return "Currently serving " + serving + ".";
  }else{
   return "There is nobody waiting to be served!";
  }
};

function takeANumber(line, name){
  line.push(name);
  return "Welcome, " + name + ". You are number " + line.length + " in line.";
};
