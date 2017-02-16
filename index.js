function takeANumber(deli, name) {
  deli.push(name)
  return `Welcome, ${name}. You are number ${deli.indexOf(name) + 1} in line.`
}

function nowServing(deli) {
  if(deli.length == 0) {
    return "There is nobody waiting to be served!"
  }
  else{
    return `Currently serving ${deli.splice(0,1)}.`
  }
}

function currentLine(line) {
  if(line.length == 0) {
    return "The line is currently empty."
  }
  else{
    var list = [];
    line.forEach(function( name, index) {
      list.push(`${index+1}. ${ name}`); 
    })
    return `The line is currently: ${list.join(", ")}`
  }
}
