var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var num = katzDeliLine.length;
  return "Welcome, " + name +". You are number " + num + " in line.";
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length > 0) {
    var patron = katzDeliLine.shift()
    return "Currently serving " + patron + ".";
  } else {
    return "There is nobody waiting to be served!";
  };
}

function currentLine(katzDeliLine) {
  if(katzDeliLine.length > 0) {
    var greeting = "The line is currently:";
    katzDeliLine.forEach(function(name, index){
      index += 1;
      greeting = greeting + " " + index + ". " + name + ",";
    });
    return greeting.slice(0, -1);
  } else {
    return "The line is currently empty.";  
  };
}