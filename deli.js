function takeANumber(line, name) {
  line.push(name)
  return "Welcome, " + name + ". You are number " + line.length + " in line.";
};

function nowServing(line) {
  if (!line.length) {
    return "There is nobody waiting to be served!"
  }

  return "Currently serving " + line.shift() + "."
};

function currentLine(line) {
  if (!line.length) {
    return "The line is currently empty."
  }
  var message = "The line is currently: ";
  line.forEach(function(name, index) {
    message += (index + 1) + ". " + name + ", ";
  });
  return message.slice(0,-2);
};
