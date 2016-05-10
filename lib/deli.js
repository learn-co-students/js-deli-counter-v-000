'use strict';

var katzDeli = [];
var emptyLineMessage = 'The line is currently empty.'
var isDeliEmpty = function(katzDeli) {
  return (katzDeli.length == 0);
}

function line(katzDeli) {
  return (isDeliEmpty(katzDeli) ? emptyLineMessage : currentlyWaiting(katzDeli))
};

function nowServing() {
  // your code here
};

function takeANumber() {
  // your code here
};


function currentlyWaiting(katzDeli) {
  var memo = ['The line is currently:']
  katzDeli.forEach(function (customer, number) {
    memo.push((number + 1) + '. ' + customer + ',');
  });
  var message = memo.join(' ');
  return message.slice(0,-1);
}

function nowServing(katzDeli) {
  var memo = [];
  if (isDeliEmpty(katzDeli)) {
    return 'There is nobody waiting to be served!';
  } else {
    return 'Currently serving ' + katzDeli.shift() + '.';
  }
}

function takeANumber(katzDeli, name) {
  katzDeli.push(name);
  return 'Welcome, ' + name + '. You are number ' + katzDeli.length + ' in line.';
}
