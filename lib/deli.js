'use strict';

function line(deli) {

  if (deli.length === 0){
    return "The line is currently empty.";
  }else{
    var collection = []
    deli.forEach(function(person, index){
      collection.push((index +1).toString() + ". " + person);
    });
    return "The line is currently: " + collection.join(", ")
  }
};

function nowServing(deli){
  if (deli.length === 0){
    return "There is nobody waiting to be served!";
  }else{
    var name = deli.splice(0,1)
    return "Currently serving " + name.join("") + "."

  }
};

function takeANumber(deli, name){

  deli.push(name);
  return "Welcome, " + name + ". " + "You are number " + deli.length + " in line."
};
