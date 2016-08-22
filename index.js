function takeANumber(line,name){
line.push(name)
return `Welcome, ${name}. You are number ${line.length} in line.`
};


function nowServing(line){
  if (line.length == 0){
    return "There is nobody waiting to be served!"
  }
    var person = line[0]
    line.splice(0,1)
    return `Currently serving ${person}.`
};

function currentLine(line){
  var writtenline = []

  if (line.length == 0){
    return "The line is currently empty."
  }

    line.forEach(function(name, index){
      writtenline[index] = `${index+1}. ${name}`
    })
    return `The line is currently: ${writtenline.join(', ')}`
  
};

