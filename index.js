function takeANumber(line, new_person) {
  var spot = (line.length + 1);
  line = line.push(new_person)
  return `Welcome, ${new_person}. You are number ${spot} in line.`;
}

function nowServing(line) {
  if (line.length == 0) {
    return "There is nobody waiting to be served!";
  } else {
  var customer = line.shift();
  return "Currently serving " + customer + ".";

  }
}

function currentLine(line) {
  if (line.length == 0) {
    return "The line is currently empty.";
  } else {
  var final = "The line is currently: ";
  line.forEach(function(customer, index) {
    final += (index + 1) + ". " + customer + ", ";
  });
  final = final.slice(0, -2);
  return final;
}
}
