var katzDeli = [];

function takeANumber(katzDeliLine, new_person) {

  if(katzDeliLine.length >= 0) {
    katzDeliLine.push(new_person);
    return `Welcome, ${new_person}. You are number ${katzDeliLine.length} in line.`;

  }
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length > 0) {

    return `Currently serving ${katzDeliLine.shift()}.`;
  } else {
    return "There is nobody waiting to be served!";


  }
}

function currentLine(line) {
    if(line.length == 0) {
      return "The line is currently empty."
    } else {
      var line_list = ``;
      for (var i = 0; i< line.length; i++) {
        if(i != line.length -1) {
          line_list += `${i+1}. ${line[i]}, `;
        } else {
          line_list += `${i+1}. ${line[i]}`;
        }
      }
      return `The line is currently: ${line_list}`;
    }
}
