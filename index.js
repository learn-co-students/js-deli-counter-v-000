
function takeANumber(deli, name) {
  deli.push(name);
  return `Welcome, ${name}. You are number ${deli.indexOf(name) + 1} in line.`;
}

function nowServing(array) {
  if (array.length === 0) {
    return 'There is nobody waiting to be served!';
  } else {
    return `Currently serving ${array.shift()}.`;
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return 'The line is currently empty.';
  } else {
    const names = [];
    for (let i = 0; i < line.length; i++) {
      names.push(`${i + 1}. ${line[i]}`);
    }
    return `The line is currently: ${names.join(', ')}`;
  }
}
