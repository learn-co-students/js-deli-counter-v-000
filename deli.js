function takeANumber(katzDeli, name) {
  katzDeli.push(name);
  position = katzDeli.indexOf(name) + 1;
  return "Welcome, " + name + ". You are number " + position + " in line."
}

function nowServing(array) {

  if(array.length == 0)
    return "There is nobody waiting to be served!"
  else
    return "Currently serving " + array.splice(0,1) + "."
}

function currentLine(array) {
  if (array.length === 0) {
    return "The line is currently empty.";
  } else {
    var line = "The line is currently: ";
        array.forEach(function(person, index) {
            line += (index +1) + ". " + person + ", ";    
        });
        return line.slice(0, -2);
      }
}