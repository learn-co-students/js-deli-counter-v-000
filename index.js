var katzDeliLine = [];

function takeANumber(line, name) {
  line.push(name);

  return "Welcome, " + name + ". You are number " + line.length + " in line."
}

function nowServing(line) {
  if (line.length == 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    var name = line.shift();
    return "Currently serving " + name + ".";
  }
}

function currentLine(line) {
  if (line.length == 0) {
    return "The line is currently empty.";
  }
  else {
    var message = "The line is currently: "

    var count = 0;
    while (count < line.length) {
      message = message + (count + 1)  + ". " + line[count];
      count++;

      if (count < line.length) {
        message = message + ", ";
      }
    }

    return message;
  }
}
