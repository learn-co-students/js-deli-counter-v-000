var katzDeli = [];

function takeANumber(line, name) {
  line.push(name);
  return "Welcome, " + name + ". You are number " + line.length + " in line.";
};

function nowServing(line) {
  if(line.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    return "Currently serving " + line.shift() + ".";
  }
};

function currentLine(line) {
  var modList = [];
  if(line.length === 0) {
    return "The line is currently empty."
  }
  line.forEach(function(name, index) {
    var number = index + 1
    modList.push(`${number}. ${name}`);
  })
  return `The line is currently: ${modList.join(', ')}`;
}
