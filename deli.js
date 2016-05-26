var katzDeliLine = [];

function takeANumber(line, person) {
    line.push(person);
    var position = line.indexOf(person) + 1;
    return "Welcome, " + person + ". You are number " + position + " in line."
}

function nowServing(line) {
    if(line.length == 0) {
        return "There is nobody waiting to be served!"
    } else {
        var nextUp = line[0];
        line.splice(0, 1);
        return "Currently serving " + nextUp + ".";
    }
}

function currentLine(line) {
    if(line.length == 0) {
        return "The line is currently empty."
    } else {
        var lineReport = "The line is currently:"
        line.forEach(function(person, index) {
          if(line.indexOf(person) != (line.length - 1)) {
            lineReport += (" " + (index + 1) + ". " + person + ",");
          } else {
            lineReport += (" " + (index + 1) + ". " + person);
          }
        });
        return lineReport;
    }
}
