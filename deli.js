var katzDeli = [];

function takeANumber(deliLine, newName) {
  deliLine.push(newName);
  return `Welcome, ${newName}. You are number ${deliLine.length} in line.`
}

function currentLine(deliLine) {
  if (deliLine.length === 0) {
    return "The line is currently empty."
  } else {
    var lineDetails = [];
    var i;
    for (i = 0; i < deliLine.length; i++) {
      lineDetails.push(i+1 + ". " + deliLine[i]);
    };
    return "The line is currently: " + lineDetails.join(", ");
  }
}

function nowServing(deliLine) {
  return deliLine.length !== 0 ? "Currently serving " + deliLine.shift() + "." : "There is nobody waiting to be served!"
}