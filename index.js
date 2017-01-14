var katzDeli = [];


function takeANumber(katzDeli, name){
  katzDeli.push(name)
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`;
}


function nowServing(katzDeli){
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var nextUp = katzDeli.splice(0,1);
    return `Currently serving ${nextUp}.`;
  }
}

function currentLine(line){
  var numberedNames = []
  
  if (line.length === 0) {
    return "The line is currently empty.";
  } else {
    line.forEach(function(name, index){
      numberedNames.push(`${index+1}. ${name}`)
    }) 
  }
  return `The line is currently: ${numberedNames.join(", ")}`
}
