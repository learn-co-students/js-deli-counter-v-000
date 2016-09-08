function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var position = katzDeliLine.lastIndexOf(name) + 1;
  return "Welcome, " + name + ". You are number " + position + " in line.";
};

function nowServing() {
  if (katzDeliLine.length == 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    var next = katzDeliLine.shift();
    return "Currently serving " + next + ".";
  }
};

function currentLine(katzDeliLine) {
  if (katzDeliLine.length == 0) {
    return "The line is currently empty."
  }
  else {
    var string = ""
    var list = katzDeliLine.forEach(function(name, index) {
      var number = index + 1;
      string = string + number + ". " + name + " "
    })
    return string;
  }
};
