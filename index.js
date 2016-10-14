var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var place = katzDeliLine.length;
  return "Welcome, " + name + ". You are number " + place + " in line."
}

function nowServing(katzDeliLine) {
  var name = katzDeliLine.shift();
  if (name == null) {
    return "There is nobody waiting to be served!"
  } else { 
    return "Currently serving " + name + "."
};
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    var sentence = "The line is currently: ";
    katzDeliLine.forEach(function(name, index) {
      var number = index + 1;
      if (index === 0) {
        sentence = sentence + number + ". " + name;
      } else {
        sentence = sentence + ", " + number + ". " + name;
      }
    });
    return sentence;
  }
}