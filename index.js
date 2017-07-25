var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
    katzDeliLine.push(name)
    return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
    if (katzDeliLine.length == 0) {
      return "There is nobody waiting to be served!"
      } else {
      let pers = katzDeliLine[0];
      katzDeliLine.shift();
      return `Currently serving ${pers}.`;
      }
}

function currentLine(katzDeliLine) {
    if(katzDeliLine.length == 0) {
        return "The line is currently empty."
    } else {
        let line = "The line is currently:";
        for(let index in katzDeliLine) {
          line = line.concat(` ${parseInt(index)+1}. ${katzDeliLine[index]},`);
         }
        line = line.slice(0, -1);
        return line;
      }
    }
