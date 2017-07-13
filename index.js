var katzDeli = []

function takeANumber(line, name) {
  line.push(name)

  return `Welcome, ${name}. You are number ${line.length} in line.`

}

function currentLine(line){

  if (line.length == 0) {
    return "The line is currently empty."
  }
  else {

    let lineQueue = line.map(function(name, index){
    return ` ${index +1}. ${name}`
    })
    return `The line is currently:${lineQueue}`
  }
}

function nowServing(line){

if (line.length == 0){
  return "There is nobody waiting to be served!"
} else {
  return `Currently serving ${line.shift()}.`
}
}
