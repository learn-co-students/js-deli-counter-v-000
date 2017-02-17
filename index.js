var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  return `Welcome, ${name}. You are number ${katzDeliLine.push(name)} in line.`;
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length < 1) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}
