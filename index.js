function takeANumber(line, name) {
  line.push(name);

  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (line.length > 0) {
    var customer = line[0]
    line.shift()
    return `Currently serving ${customer}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  if (line.length > 0) {
    var listed = new Array();

    for (var i = 0; i < line.length; i++) {
      listed.push(`${i + 1}. ${line[i]}`)
    }
    return `The line is currently: ${listed.join(", ")}`
  } else {
    return "The line is currently empty."
  }
}
