function takeANumber(line, name){
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}
function nowServing(line) {
  let person = line.shift();
  if (line.length == 0) {
    return ("There is nobody waiting to be served!");
  }
    return `Currently serving ${person}.`;
}
function currentLine(line) {
  if (line.length == 0) {
    return ("The line is currently empty.");
  }
  let names = [];
  for (let i = 0; i < line.length; i++) {
    names.push(`${i+1}. ${line[i]}`);
  }
  return `The line is currently: ${names.join(", ")}`
}
