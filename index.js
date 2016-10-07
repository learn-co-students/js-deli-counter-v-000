function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + (katzDeliLine.indexOf(name) + 1) + " in line.";
}

function nowServing(deliLine) {
  if (deliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return "Currently serving " + deliLine.shift() + ".";
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty.";
  } else {
    var list = []
    line.forEach(
      function(name, index) { list.push((index + 1) + ". " + name);
      });
    return "The line is currently: " + list.join(", ");
    }

}
