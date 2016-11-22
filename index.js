function takeANumber(line, name) {
  line.push(name)
  return "Welcome, " + name + ". You are number " + line.length + " in line."
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    return "Currently serving " + line.shift() + "."
  }
}

function currentLine(line) {
  if (line.length > 0) {
    var nums = []
    for (var i = 0; i < line.length; i++) {
      nums.push(i + 1 + ". " + line[i])
    }
    return "The line is currently: " + nums.join(", ")
  }
  else {
    return "The line is currently empty."
  }
}
