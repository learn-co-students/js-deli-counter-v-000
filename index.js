var katzDeli = [];

function takeANumber(line, name) {
  line.push(name);
  return ("Welcome, " + name + ". You are number " + (line.indexOf(name) + 1) + " in line.");
}

function nowServing(line) {
  if (line[0] === undefined) {
    return ("There is nobody waiting to be served!");
  } else {
    var name = line.shift();
    return ("Currently serving " + name + ".");
  }
}

function currentLine(line) {
  if(line[0] === undefined) {
    return "The line is currently empty.";
  } else {
    var string = "The line is currently: ";
    for (var i = 0; i < line.length - 1; i++) {
      string += ([i+1] + ". " + line[i] + ", ");
    }
    string += ([line.length] + ". " + line[line.length - 1]);
    return string;
  }
}
