var KatzDeli = []

function takeANumber(deli, person) {
  deli.push(person);
  return "Welcome, " + person + ". You are number " + deli.length + " in line.";
}

function nowServing(deli) {
  if (deli.length) {
    return "Currently serving " + deli.shift() + ".";
  }
  else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(deli) {
  if (deli.length) {
    var nameWithIndex = [];
    deli.forEach(function (person, index) {
      nameWithIndex.push((index + 1) + ". " + person);
    });
    var line = nameWithIndex.join(', ')
    return "The line is currently: " + line;
  }
  else {
    return "The line is currently empty."
  }
}

