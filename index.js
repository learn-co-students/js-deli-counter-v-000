var katzDeli = [];
var line = [];

function takeANumber(katzDeli, person) {
  katzDeli.push(person);
  return `Welcome, ${person}. You are number ${katzDeli.length} in line.`;
}

function currentLine(katzDeli) {
  if (katzDeli.length == 0) {
    return "The line is currently empty.";
  } else {
    katzDeli.forEach(function(person, place) {
      var position = place + 1
      line.push(` ${position}. ${person}`)
    });
    return `The line is currently:${line}`;
  }
}

function nowServing(katzDeli) {
  if (katzDeli.length == 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${katzDeli.shift()}.`
  }
}
