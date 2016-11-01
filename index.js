function takeANumber(line, newCustomer) {
  line.push(newCustomer);
  return `Welcome, ${newCustomer}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  if (!line.length) {
    return "There is nobody waiting to be served!";
  }
  else {
    return `Currently serving ${line.shift()}.`;
  }
}

function currentLine(line) {
  if (!line.length) {
    return "The line is currently empty.";
  }
  else {
    var newLine = [];
    line.forEach(function(customer, index) {
      newLine.push(`${index + 1}. ${customer}`);
    });
    return "The line is currently: " + newLine.join(", ");
  }
}