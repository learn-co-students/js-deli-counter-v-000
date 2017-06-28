
function takeANumber(deli, name){
  deli.push(name);
  return "Welcome, "+ name +". You are number "+ deli.length +" in line."
}


function nowServing(deli){
  if (deli.length > 0) {
    name = deli.shift();
    return "Currently serving " + name;
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(deli) {
  if (deli.length > 0) {
    // 1. Bill, 2. Jane, 3. Ann
    return "The line is currently:" + deli.map((name, index) => ` ${index + 1}. ${name}`).join()
  } else {
    return "The line is currently empty."
  }
}
