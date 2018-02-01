function takeANumber(katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${katzDeliLine.lastIndexOf(newPerson)+1} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.splice(0,1)}.`;
  } else {
    return `There is nobody waiting to be served!`;
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    currentLine = [];
    katzDeliLine.forEach(function(name, index) {
      var place = index + 1;
      currentLine.push(`${place}. ${name}`);
    });
      return `The line is currently: ${currentLine.join(", ")}`;
  } else {
    return `The line is currently empty.`
  }
}
