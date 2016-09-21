var katzDeliLine = [];

function takeANumber(line, name) {
  line.push(name);
  var linelength = line.length
  return `Welcome, ${name}. You are number ${linelength} in line.`;
}

function nowServing(line) {
  var next = line[0];
  if (line.length > 0) {
    line.shift();
    return `Currently serving ${next}.`;
  }
  else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(line) {
  var nameslist = []
  if (line.length > 0) {
    for (var i = 0; i < line.length; i++) {
      nameslist.push(`${i +1}. ${line[i]}`)
    }
    return `The line is currently: ${nameslist.join(", ")}`;
  }
  else {
    return "The line is currently empty.";
  }
}
