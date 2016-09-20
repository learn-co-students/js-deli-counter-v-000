var katzDeli = [];

function takeANumber(katzDeli, name){
  katzDeli.push(name);
  return "Welcome, " + name + ". You are number " + katzDeli.length + " in line.";
}

function nowServing(katzDeli){
  if (katzDeli.length === 0){
  return "There is nobody waiting to be served!";
} else {
  var nextperson = katzDeli.splice(0,1);
  return "Currently serving " + nextperson + ".";
  }
}

function currentLine(katzDeli){
  if (katzDeli.length === 0){
  return "The line is currently empty.";
} else {
  var line = "The line is currently:";
  var currentline = [];
  katzDeli.forEach(function(person, index) {
    currentline.push(" " + (index+1) + ". " + person)
  });
  return line + currentline;
  }
}
