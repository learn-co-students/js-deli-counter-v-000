var katzDeli = []

function takeANumber(line, name){
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line){
  if (line.length === 0){
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${line.shift()}.`
  }

}



function currentLine(line){
  if (line.length === 0){
    return "The line is currently empty."
  }
  else {
    var i = 1
    var string = `${i}. ${line[i-1]}`
    i += 1
    while (i < line.length+1) {
      string = string + ", " + `${i}. ${line[i-1]}`
      i+= 1
    }

    return `The line is currently: ${string}`
  }
}

