var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.splice(0, 1)}.`;
  } else {
  return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    currentLine = [];
    katzDeliLine.forEach(function(name, index) {
      currentLine.push(`${index + 1}. ${name}`);
    })
    return `The line is currently: ${currentLine.join(", ")}`;
  } else {
    return "The line is currently empty.";
  }
}
