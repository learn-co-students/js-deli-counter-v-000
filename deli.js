function takeANumber(lineArray, name){
  lineArray.push(name);
  return "Hello, " + name + ", you are number " + lineArray.length + " in line.";
}

function nowServing(lineArray){
  if(lineArray.length >= 1){
    var current = lineArray.shift();
    return "Currently serving " + current;
  }
  else{
    return "There is nobody waiting to be served!"
  }
}

function currentLine(lineArray){
  if(lineArray.length >= 1){
    var output = "The line is currently:";
    lineArray.forEach(function(e, i){
      output += " " + (i + 1) + ". " + e; 
    });
    return output;
  }
  else{
    return "The line is currently empty."
  }
}