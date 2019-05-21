var katzDeli= [];

function takeANumber(katzDeliLine, name){
  var newLine= katzDeliLine.push(name)
  return `Welcome, ` +name+ `. You are number ` +katzDeliLine.length+ ` in line.`

}

function nowServing(katzDeliLine, name){
  if(katzDeliLine == 0){
    return `There is nobody waiting to be served!`
  }
  else {

    return `Currently serving ${katzDeliLine.shift()}.`
  }
}

function currentLine(line){
  if(line == 0){
    return `The line is currently empty.`
  }
  else {
    return `The line is currently: ${`1. ${line[0]}, 2. ${line[1]}, 3. ${line[2]}`}`
  }
}
