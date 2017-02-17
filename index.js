function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  if(line.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var serving = line.splice(0, 1);
    return `Currently serving ${serving}.`;
  }
}

function currentLine(line) {
  if(line.length === 0) {
    return "The line is currently empty.";
  } else {
    var list = [];
    line.forEach(function(person, index) {
      list.push(`${index + 1}. ${person}`);
    });

    return "The line is currently: " + list.join(', ');
  }

}