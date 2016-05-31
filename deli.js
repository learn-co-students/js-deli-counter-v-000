function currentLine(line) {
  var line = line
  if (line.length == 0){
    return "The line is currently empty."
  } else {
    var numbered_line = []
    for(var index = 1; line.length >= index ; index++) {
      numbered_line.push(`${index}. ${line[index - 1]}`)
    }
    return `The line is currently: ${numbered_line.join(", ")}`
  }
}

function nowServing(line) {
  if (line.length ==0){
    return "There is nobody waiting to be served!"
  } else {
    var currently_serving = line.shift()
    return `Currently serving ${currently_serving}.`
  }
}

function takeANumber(line, person) {
  line.push(person)
  return `Welcome, ${person}. You are number ${line.length} in line.`
}


//for(var i=0;i<foo.length;i++){
//  document.write('Item: ' + (i+1) + ' of ' + foo.length + '<br/>');
//}
