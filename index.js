function takeANumber(line, name) {
  line.push(name)

  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (!line.length) {
    return 'There is nobody waiting to be served!'
  }

  return `Currently serving ${line.shift()}.`
}

function currentLine(line) {
  if (!line.length) {
    return 'The line is currently empty.' 
  } 

    const myLine = []

    for (let i = 0, l = line.length; i < l; i++) {
      myLine.push(`${i + 1}. ${line[i]}`)
    }

    return `The line is currently: ${myLine.join(', ')}`
}