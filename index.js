function takeANumber(line, name) {
  line.push(name);
  return "Welcome, " + name + ". You are number " + line.length + " in line."
}

function nowServing(line) {
  if (!line.length) {
    return "There is nobody waiting to be served!";
  }
  else {
    return "Currently serving " + line.splice(0,1) + ".";
  }
}

function currentLine(line) {
  if (line.length > 0) {
    var currentLine = [];
    line.forEach(function(person, index) {
      currentLine.push((index + 1) + ". " + person)
    });
    return "The line is currently: " + currentLine.join(", ");
  }
  else {
    return "The line is currently empty."
  }
}