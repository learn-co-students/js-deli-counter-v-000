function takeANumber(line, name){
  line.push(name);
  var place = line.length;
  return "Welcome, " + name + ". You are number " + place + " in line."
}

function nowServing(line){
  if (line.length >= 1) {
    var name = line[0];
    line.splice(0, 1);
    return "Currently serving " + name + ".";

  }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line){
  var line_list = []
  if (line.length >= 1){
    line.forEach(function(name, index) {
      var number = index + 1;
      line_list.push(`${number}. ${name}`);
    });
    return "The line is currently: " + line_list.join(", ");
  }
  else {
    return "The line is currently empty."
  }
}
