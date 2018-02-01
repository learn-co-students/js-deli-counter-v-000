var katzDeli = [];

function takeANumber(katzDeli, name) {
  katzDeli.push(name);
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var next = line.shift();
    return `Currently serving ${next}.`;
  }
}

function currentLine(line) {
  let waitLine = 'The line is currently:'
  if (line.length) {
    line.forEach((name, i) => {
      if (i === line.length -1) {
        waitLine += ` ${i + 1}. ${name}`;
      } else {
        waitLine += ` ${i + 1}. ${name},`;
      }
    })
  } else {
    return "The line is currently empty."
  }
  return waitLine
}
