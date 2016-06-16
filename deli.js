function takeANumber(line, person){
  line.push(person);
  return "Welcome, " + person + ". You are number " + line.length + " in line.";
}

function nowServing(line){
  if(line.length < 1){
    return "There is nobody waiting to be served!";
  } else {
    var next = line.shift();
    return "Currently serving " + next + ".";
  }
}

function currentLine(line){
  if (line.length < 1){
    return "The line is currently empty.";
  } else {
    list = [];
    line.forEach(function(item, index){
      var listItem = (index + 1) + ". " + item;
      list.push(listItem);
    });

    return "The line is currently: " + list.join(', ');
  }
}
