function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if(line.length == 0) {
    return "There is nobody waiting to be served!";
  } else {
    var current_customer = line.splice(0, 1);
    return `Currently serving ${current_customer}.`;
  }
}

function currentLine(line) {
  if(line.length == 0) {
    return "The line is currently empty."
  } else {
    var numline = [];
    line.forEach(function(customer, index) {
      numline.push(`${index + 1}. ${customer}`);
    });
    var string = numline.join(", ");
    return `The line is currently: ${string}`;
  }
}
