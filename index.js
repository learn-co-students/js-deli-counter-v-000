function takeANumber(deliLine, name){
  deliLine.push(name)
  return `Welcome, ${name}. You are number ${deliLine.length} in line.`
}

function nowServing(deliLine){
  if(deliLine.length > 0){
    var personServed = deliLine.shift()
    return `Currently serving ${personServed}.`
  } else{
    return "There is nobody waiting to be served!"
  }
}

function currentLine(deliLine){
  var size = deliLine.length;
  var new_array = ["The line is currently:"]
  if(size > 0){
    for (var i = 0; i < size; i++){
      i < size - 1 ? new_array.push(`${i+1}. ${deliLine[i]},`) : new_array.push(`${i+1}. ${deliLine[i]}`)
    }
    return new_array.join(" ")
  }
  else {
    return "The line is currently empty."
  }
}
