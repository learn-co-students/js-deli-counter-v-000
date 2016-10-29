function takeANumber(line, customer) {
  line.push(customer);
  var position = line.indexOf(customer) + 1;
  return "Welcome, " + customer + ". You are number " + position + " in line.";
}

function nowServing(line) {
  if (line.length > 0) {
    var customer = line.splice(0, 1);
    return "Currently serving " + customer + ".";
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(line) {
  if (line.length > 0) {
    var customersArray = [];

    line.forEach(function(customer, position) {
      position += 1;
      customersArray.push(position + ". " + customer);
    });

    return "The line is currently: " + customersArray.join(", ");
  } else {
    return "The line is currently empty.";
  }
}
