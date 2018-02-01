var katzDeliLine = []

function takeANumber(array, name) {
  array.push(name)
  return "Welcome, " + name + ". You are number " + array.length + " in line."
}

function nowServing(array) {
  if (array.length == 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    return "Currently serving " + array.splice(0,1) + "."
  }
}

function currentLine(line) {
  if (!line.length) {
    return "The line is currently empty."
  }

  const numbersAndNames = []

  for (let i = 0, l = line.length; i < l; i++) {
    numbersAndNames.push(`${i + 1}. ${line[i]}`)
  }

  return `The line is currently: ${numbersAndNames.join(', ')}`
};
