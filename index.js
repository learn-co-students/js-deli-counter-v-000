var katzDeli = [];

function takeANumber(katzDeli, name) {
  katzDeli.push(name);
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`;
}

function nowServing(katzDeli) {
  if(katzDeli.length > 0) {
    var name = katzDeli.splice(0, 1);
    return `Currently serving ${name}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeli) {
  var line = "The line is currently:";
  if(katzDeli.length > 0) {
    katzDeli.forEach(function(name, index) {
      line += ` ${index + 1}. ${name},`;
    })
    return line.slice(0, -1);
  } else { return "The line is currently empty.";}
}
