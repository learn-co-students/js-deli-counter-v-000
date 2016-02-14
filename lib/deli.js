'use strict';

function line(line){
  var currentLine = line.map(function(el, idx){
    return (idx+=1) + '. ' + el;
  });
  return (currentLine.length >= 1) ? 'The line is currently: ' + currentLine.join(', ') : 'The line is currently empty.';
}

function nowServing(line){
  var customer = line.shift();
  return (typeof customer !== 'undefined') ? 'Currently serving ' + customer + '.' : 'There is nobody waiting to be served!';
}

function takeANumber(line, customer){
  var spot = line.push(customer);
  return 'Welcome, ' + customer + '. You are number ' + spot + ' in line.';
}