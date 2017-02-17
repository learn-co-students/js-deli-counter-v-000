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

function currentLine(katzDeliLine) {
  if (katzDeliLine.length < 1) {
    return "The line is currently empty."
  } else {
    var str = `The line is currently: `;
    var strArr;
    for(let i = 0; i < katzDeliLine.length; i++) {
      str += `${i + 1}. ${katzDeliLine[i]}, `;
    }
    strArr = str.trim().split('');
    strArr.pop();
    str = strArr.join("");
    return str;
  }
}
