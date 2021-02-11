var katzDeli = [];

function takeANumber(array, persons_name) {
  array.push(persons_name)

  return `Welcome, ${persons_name}. You are number ${array.length} in line.`
}

function nowServing(array) {
  if(array.length === 0) {
    return 'There is nobody waiting to be served!'
  } else {
    var serving = array.shift()
    return `Currently serving ${serving}.`
  }
}

function currentLine(array) {
  var i = 0

  if(array.length === 0) {
    return `The line is currently empty.`
  } 

  var line = []

  while (i < array.length) {
    line.push(`${i + 1}. ${array[i]}`)

    i++
  }

  return `The line is currently: ${line.join(', ')}`
}