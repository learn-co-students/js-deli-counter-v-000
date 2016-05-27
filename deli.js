'use strict';

function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function currentLine(line) {
  if (line.length === 0) {
    return 'The line is currently empty.';
  }

  var nameWithIndex = [];
  line.forEach(function (customer, index) {
    nameWithIndex.push((index + 1) + '. ' + customer);
  });

  return `The line is currently: ${nameWithIndex.join(', ')}`;
}

function nowServing(line) {
  if (line.length === 0) {
    return 'There is nobody waiting to be served!';
  }

  return `Currently serving ${line.shift()}.`;
}
