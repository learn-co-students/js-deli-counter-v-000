var katzDeli = []

function takeANumber(deliLine, name){
  var deliLineLength = deliLine.length + 1
  deliLine.push(name)
  return `Welcome, ${name}. You are number ${deliLineLength} in line.`
}

function nowServing(deliLine){
  var deliLineLength = deliLine.length + 1
  var response = ""
  if(deliLine.length>0){
      response = `Currently serving ${deliLine[0]}.`
      deliLine.shift()
  }else{
      response = "There is nobody waiting to be served!"
  }

  return response

}

function currentLine(line){
  var response = "The line is currently"
  var deliLineLength = line.length + 1
  if(line.length != 0 ){
    response += ":"
    for(var i=0;i<line.length;i++){
      response += ` ${i+1}. ${line[i]}`
      if (i == (line.length - 1)){
      }else{
        response += ","
      }
    }
  }else{
    response = "The line is currently empty."
  }

  return response

}
