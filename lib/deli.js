'use strict';

function line(deli) {
  if (deli.length > 0){
    var new_array = []
    var i = 1
    deli.forEach(function(entry){
      new_array.push(i + ". " + entry)
      i++
    })
    return "The line is currently: " + new_array.join(", ");
  } else {
    return 'The line is currently empty.';
  }
};

function nowServing(deli){
  if (deli.length > 0){
    var person = deli[0];
    deli.splice(0,1);
    return 'Currently serving ' + person + '.';
  } else {
    return 'There is nobody waiting to be served!';
  };
};

function takeANumber(deli,name){
  deli.push(name);
  return 'Welcome, ' + name + '. You are number ' + deli.length + ' in line.';
};
