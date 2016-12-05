var katzDeli = [];

function takeANumber(currentLine, newGuy) {
  currentLine.push(newGuy);
  return `Welcome, ${newGuy}. You are number ${currentLine.length} in line.`;
}

function nowServing(currentLine) {
  if (currentLine.length >= 1) {
    var currentCustomer = currentLine.splice(0,1);
    return `Currently serving ${currentCustomer[0]}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  if (line.length > 0) {
    var call = "The line is currently: "
    var theLine = line.forEach(function(person, spot) {
      call += `${spot + 1}. ${person}, `
    });

    return call.slice(0, -2);
  } else {
    return "The line is currently empty."
  }
}
