function takeANumber(line, name){
  var pos =  line.push(name);
  return `Welcome, ${name}. You are number ${pos} in line.`
}

function nowServing(line){
  if(line.length===0)return "There is nobody waiting to be served!";
  var removed = line.shift();
  return `Currently serving ${removed}.`
}

function currentLine(line){
  if(line.length===0)return "The line is currently empty.";
  var result = 'The line is currently: ';
  for(var i = 0; i < line.length; i++){
    result += `${i+1}. ${line[i]}`;
    if(i < line.length-1)result += ", "
  }
  return result;
}
