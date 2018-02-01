function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  if (line.length <= 0) {
    return "There is nobody waiting to be served!";
  } else {
    var name = line[0];
    line.splice(0, 1);
    return `Currently serving ${name}.`;
  }
}

function currentLine(line) {
  if (line.length <= 0) {
    return "The line is currently empty.";
  } else {
    var numline = [];
    line.forEach(function(name, index) {
      numline.push(`${index + 1}. ${name}`);
    });
    var string = numline.join(", ");
    return `The line is currently: ${string}`;
  }
}