function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (line.length > 0) {
    var first = line[0];
    line.shift();
    return `Currently serving ${first}.`;
  } else {
    return 'There is nobody waiting to be served!'
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return 'The line is currently empty.';
  } else {
    var currentLine = new Array();
    for(let i = 1; i <= line.length; i++) {
      currentLine.push(` ${i}. ${line[i-1]}`);
    }
    return `The line is currently:${currentLine.join(',')}`
  }
}
