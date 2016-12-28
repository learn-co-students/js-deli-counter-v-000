"use strict";

function takeANumber(katzDeliLine,name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(line) {
  if (line.length == 0) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${line.shift()}.`;
  }
}

function currentLine(line) {
  if (!line.length) {
    return "The line is currently empty.";
  } else {
    let numNames = []

    for (let i = 0; i < line.length; i++) {
      numNames.push(`${i + 1}. ${line[i]}`)
    }

    return `The line is currently: ${numNames.join(', ')}` 
  }
}
