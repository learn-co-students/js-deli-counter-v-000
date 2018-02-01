function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  var next_up = katzDeliLine.shift();
  if (!next_up) {
      return "There is nobody waiting to be served!"
  }
  return 'Currently serving ' + next_up + '.';
}

function currentLine(line) {
  if (line.length > 0) {
    var response = 'The line is currently: ';
    for (let i = 0; i != line.length; i++) {
      response += (i + 1) + '. ' + line[i] + ', ';
    }
    return response.substring(0,response.length - 2);
  }
  else {
    return "The line is currently empty.";
  }
}
