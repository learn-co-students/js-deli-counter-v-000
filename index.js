function takeANumber(katzDeli, Deli) {
  let katz = []
  let i = 0
  katzDeli.push(Deli)
  while (katzDeli.length > i){
    katz.push(`Welcome, ${katzDeli[i]}. You are number ${i+1} in line.`)
   i++
  }
  return katz.slice(-1)[0]
}

function nowServing(deliLine) {
  if (!deliLine.length) {
    return (`There is nobody waiting to be served!`)
  } else {
    return (`Currently serving ${deliLine.shift()}.`)
  }
}

function currentLine(line) {
  if (!line.length) {
    return `The line is currently empty.`
  } else {
    var current =  []
    line.forEach(function(name, index) {
      current.push(` ${index + 1 }. ${name}`);
    });
    return `The line is currently:${current}`;
  }
}
