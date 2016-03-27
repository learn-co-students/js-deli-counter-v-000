'use strict';

function line(people) {
  if (people.length == 0) {
    return "The line is currently empty.";
  } else {
    var line = [];
    people.forEach(function(name, index) {
      line.push((index + 1).toString() + ". " + name);
    });
    return "The line is currently: " + line.join(", ");
  }
}

function nowServing(people) {
  if (people.length == 0) {
    return "There is nobody waiting to be served!";
  } else {
    var nextPerson = people[0];
    people.shift();
    return "Currently serving " + nextPerson + ".";
  }
}

function takeANumber(people, person) {
  people.push(person);
  return "Welcome, " + person + "." + " You are number " + (people.length) + " in line.";
}
