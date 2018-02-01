var katzDeli = [];

function takeANumber(katzDeli, person){
  katzDeli.push(person)
  return `Welcome, ${person}. You are number ${katzDeli.length} in line.`
}

function nowServing(katzDeli){
  if (katzDeli.length != 0){
    return `Currently serving ${katzDeli.shift()}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line){
  if (line.length === 0){
    return 'The line is currently empty.'
  }

  var result = []

  for (let i = 0 ; i < line.length; i ++){
      result.push( `${i+1}. ${line[i]}`)
    }
    return `The line is currently: ${result.join(", ")}`
  }
