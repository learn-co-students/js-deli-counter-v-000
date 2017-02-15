var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(deliLine) {
  if (deliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var person = deliLine.shift();
    return `Currently serving ${person}.`;
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."
  } else {
    var currentLine = "The line is currently:";
    let n = 0;
    while (n < line.length) {
      if (n+1 != line.length) {
        currentLine = currentLine + ` ${n+1}. ${line[n]},`;
        n++;
      } else {
        currentLine = currentLine + ` ${n+1}. ${line[n]}`;
        n++;
      }
    }
  }
  return currentLine;
}
