

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var index = katzDeliLine.indexOf(name) + 1;
  return "Welcome, " + name + ". You are number " + index + " in line.";
}

function nowServing(katzDeliLine) {
    if (katzDeliLine.length > 0) {
      var name = katzDeliLine.splice(0,1);
      return "Currently serving " + name[0] + ".";
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
    if (katzDeliLine.length > 0) {
          var num = 1;
          var output = "The line is currently: ";
          var arr = []
          while (katzDeliLine.length > 0) {
            var add = num + ". " + katzDeliLine.splice(0,1);
             arr.push(add);
            num+=1;
          }
          var output = output + arr.join(", ");
    } else {
      var output = "The line is currently empty.";
    }
    return output;
}
