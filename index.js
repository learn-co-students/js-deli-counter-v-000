var katzDeli = [];

function takeANumber(katzDeliLine, new_name) {
  katzDeliLine.push(new_name)
  return `Welcome, ${new_name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    let statement = "The line is currently: "
    for (let i = 0; i < katzDeliLine.length; i++) {
      if (i < katzDeliLine.length-1) {
      statement += `${i+1}. ${katzDeliLine[i]}, `
      } else {
      statement += `${i+1}. ${katzDeliLine[i]}`
      }
    }
    return statement
  } else {
    return "The line is currently empty."
  }
}
