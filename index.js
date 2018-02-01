var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  return `Welcome, ${name}. You are number ${katzDeliLine.push(name)} in line.`;
};

function nowServing(katzDeliLine){
  if (katzDeliLine.length < 1) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
};

function currentLine(katzDeliLine) {
  if (katzDeliLine.length < 1) {
    return "The line is currently empty."
  } else {
    const numbersAndNames = [];

    for (let i = 0; i < katzDeliLine.length; i++) {
      numbersAndNames.push(`${i + 1}. ${katzDeliLine[i]}`);
    }
    return `The line is currently: ${numbersAndNames.join(', ')}`
  }
};
