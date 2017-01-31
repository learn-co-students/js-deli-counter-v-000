var katzDeli = [];

function takeANumber(katzDeli, name) {
  katzDeli.push(name);
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`;
}

function nowServing(katzDeli) {
  if (katzDeli[0] !== undefined) {return `Currently serving ${katzDeli.splice(0,1)}.`;
  } else { return "There is nobody waiting to be served!";}
}


function currentLine(katzDeli) {
  if (katzDeli[0] === undefined) {
    return "The line is currently empty."
  }

  var list = [];
  katzDeli.forEach(function(name, index) {
      list.push(`${index+1}. ${name}`)
    })

    return `The line is currently: ${list.join(", ")}`;
};
