var katzDeli = [];

function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.indexOf(name) + 1} in line.`
}


function nowServing(line) {
  if (line.length > 0) {
    return `Currently serving ${line.shift()}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(line) {
  if (line.length > 0) {
    var lineString = "";
    for (var i = 0; i < line.length; i++) {
      lineString += (i + 1) + ". " + line[i] + ", ";
    }
    lineString = "The line is currently: " + lineString;
    return lineString.slice(0, lineString.length - 2);
  } else {
    return "The line is currently empty.";
  }
}
