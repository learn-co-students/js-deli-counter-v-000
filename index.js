var katzDeliLine = [];

function takeANumber(line, name) {
  line.push(name);
  return "Welcome, " + name + ". You are number " + (line.length) + " in line.";
}

function nowServing(line) {
  if (line == undefined || line.length == 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    var pers = line[0];
    line.shift();
    return "Currently serving " + pers + ".";
  }
}

function currentLine(line) {
  if (line == undefined || line.length == 0) {
    return "The line is currently empty.";
  }
  else {
    var phrase = "The line is currently: ";
    var lst = "";
    for (var i = 0; i < line.length; i++) {
      lst = lst.concat(((line.indexOf(line[i])) + 1) + ". " + line[i] + ", ");
    }
    return phrase + lst.slice(0, -2);
  }
}

