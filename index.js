function takeANumber(array, name) {
  array.push(name)

  return `Welcome, ${name}. You are number ${array.length} in line.`
}

function nowServing(line) {
  if (line.length) {
    return `Currently serving ${line.shift()}.`
  }
  else {
    return 'There is nobody waiting to be served!'
  }
}

function currentLine(line) {
  if (line.length) {
    var current_line = "The line is currently: "
    for (var i = 0 ; i < line.length -1 ; i++) {
      current_line += `${i + 1}. ${line[i]}, `
    }
    current_line += `${line.length}. ${line.slice(-1)}`
    return current_line
  } else {
    return "The line is currently empty."
  }
}
