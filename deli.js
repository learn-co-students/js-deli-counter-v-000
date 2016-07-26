

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(line) {
  var next = line.shift();
  return next ? `Currently serving ${next}.` : "There is nobody waiting to be served!";
}

function currentLine(line) {
  var names = "The line is currently";
  if (line.length > 0) {
    names += ": ";
    nameArray = [];
    line.forEach(function(name, i) {
      nameArray.push(`${i+1}. ${name}`)
    });
    names += nameArray.join(', ');
  } else {
    names += " empty.";
  }
  return names;
}