function takeANumber(myDeliLine, customer) {
  myDeliLine.push(customer)
  return `Welcome, ${customer}. You are number ${myDeliLine.length} in line.`;
}

function currentLine(myDeliLine) {
  var myString = ""
  myDeliLine.forEach(function(customer, index) {
    myString += `${index + 1 }. ${customer}, `;
  });
  if (myString === "") {
    return "The line is currently empty."
  } else {
    myString = "The line is currently: " + myString;
    myString = myString.slice(0, -1);
    return myString;
  }

}
