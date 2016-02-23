'use strict';

function line(line) {
  if (line.length > 0) {
    var customers = [];
    line.forEach(function(name, index) {
      var position = index + 1;
      customers.push(position + '. ' + name);
    })
    return 'The line is currently: ' + customers.join(', ');
  }
  else {
    return 'The line is currently empty.';
  }
};

function nowServing(line){
  if (line.length === 0) {
    return 'There is nobody waiting to be served!';
  }
  else {
    return 'Currently serving ' + line.shift() + '.'
  }
};

function takeANumber(line, name){
  line.push(name)
  return 'Welcome, ' + name + '. You are number ' + line.length + ' in line.'
};
