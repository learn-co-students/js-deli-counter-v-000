function takeANumber(line, name) {
  var position = line.push(name); 
  var welcome_message = "Welcome, " + name + ". You are number " + position + " in line.";  
  return welcome_message; 
}

function nowServing(line) {
  if (line.length == 0) {
    return "There is nobody waiting to be served!";  
  } else {
  var customer = line.shift(); 
  return "Currently serving " + customer + "."; 
  }
}

function currentLine(line) {
  if (line.length == 0) {
    return "The line is currently empty."  
  } else {
    var phrase = "The line is currently: ";  
    line.forEach(function(name, index){
      var new_line = (index+1) + ". " + name;
      if ((index + 1) < line.length) {
        new_line = new_line + ", "; 
      }
      phrase = phrase + new_line; 
    }); 
    return phrase; 
  }
}
