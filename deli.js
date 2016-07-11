function takeANumber(katzDeliLine, newPersonName) {
 katzDeliLine.push(newPersonName);
 return `Welcome, ${newPersonName}. You are number ${katzDeliLine.length} in line.`;
};

function nowServing(katzDeliLine) {
  if (katzDeliLine !== undefined && katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`
  } else {
    return "There is nobody waiting to be served!"
  }
};

function currentLine(katzDeliLine) {
  if (katzDeliLine !== undefined && katzDeliLine.length > 0) {
    var lineString = "The line is currently:"
    katzDeliLine.forEach(function(name, index) {
      lineString = lineString + ` ${index + 1}. ${name}`
      if (index + 1 < katzDeliLine.length) {
        lineString = lineString + ",";
      };
    });
    return lineString;
  } else {
    return "The line is currently empty."
  }
};