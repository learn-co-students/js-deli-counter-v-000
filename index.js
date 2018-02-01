function takeANumber(line, name) {
  line.push(name);
  var position =  line.indexOf(name) + 1;
  return `Welcome, ${name}. You are number ${position} in line.`;
}

function nowServing(line) {
  if (line.length == 0) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${line.shift()}.`;
  }
}

function currentLine(line) {

  if (line.length == 0) {
    return "The line is currently empty.";
  } else {

    var waiting_customers = []
    line.forEach(function(name, index) {
      var number = index + 1;
      waiting_customers.push(`${number}. ${name}`);
    });

    return "The line is currently: " + waiting_customers.join(", ");
  }
}
