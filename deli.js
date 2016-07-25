function takeANumber(deli, customer) {
  deli.push(customer)
  return `Welcome, ${customer}. You are number ${deli.length} in line.`
}

function nowServing(deliLine) {
  if (deliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var upNext = deliLine.shift()
    return `Currently serving ${upNext}.`
  }
}

function currentLine(deliLine) {
  if (deliLine.length === 0) {
    return "The line is currently empty."
  } else {
    var people = []
    deliLine.forEach(function(person, index) {
      people.push(`${index + 1}. ${person}`)
    })
    return `The line is currently: ${people.join(", ")}`
  }
}
