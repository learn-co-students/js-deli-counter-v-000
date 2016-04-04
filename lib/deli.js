'use strict';

function line(array) {
  if (array.length === 0) {
    return 'The line is currently empty.';
  } else {
    array.forEach(function(name, index){
      var number = index + 1;
      array[index] = number + '. ' + name;
    });
    return 'The line is currently: ' + array.join(', ');
  }
};

function nowServing(array){
  if (array.length === 0){
    return "There is nobody waiting to be served!";
  } else {
    return "Currently serving " + array.splice(0,1) + '.';
  }
};

function takeANumber(array, name){
  array.push(name);
  return 'Welcome, ' + name + '. You are number ' + array.length + ' in line.'
};


