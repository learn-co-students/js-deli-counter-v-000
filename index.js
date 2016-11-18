var katzDeli = [];

function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.indexOf(name)+1} in line.`;
};

function nowServing(line) {
  if (line.length > 0) {
    return `Currently serving ${line.shift()}.`;
  }
  else {
    return "There is nobody waiting to be served!"
  }
};

function currentLine (line) {
  var text = "The line is currently: ";
  var list = "";
  if (line.length > 0) {
    for (var i = 0; i < line.length; i++) {
      if (i < line.length-1) {
      list += `${i+1}. ${line[i]}, `
    }
      else {
        list += `${i+1}. ${line[i]}`
      }
}
    return text + list
    }
  else {
    return "The line is currently empty."
  }
};
