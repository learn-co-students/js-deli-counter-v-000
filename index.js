function takeANumber(myDeliLine, customer) {
  myDeliLine.push(customer);
  return `Welcome, ${customer}. You are number ${myDeliLine.length} in line.`;
}

function currentLine(myDeliLine) {
  var myString = "";
  myDeliLine.forEach(function(customer, index) {
    myString += `${index + 1 }. ${customer}, `;
  });
  if (myString === "") {
    return "The line is currently empty."
  } else {
    var myString2 = "The line is currently: " + myString;
    var myString3 = myString2.slice(0, -2);
    return myString3;
  }
}

function nowServing(myDeliLine) {
  if (myDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var nowServed = myDeliLine.shift();
    return `Currently serving ${nowServed}.`;
  }
}
