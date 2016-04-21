'use strict';


function line(deli) {
    if (deli.length < 1) {
        return "The line is currently empty.";
    } else {
        var str = "The line is currently: ";
        deli.forEach(function(person, index) {
            str += (index +1) + ". " + person + ", ";    
        });
        return str.slice(0, -2);
    }
}

function nowServing(deli) {
    if (deli.length < 1) {
        return "There is nobody waiting to be served!";
    } else {
        var str = "Currently serving " + deli[0] + ".";
        deli.shift();
        return str;
    }
}

function takeANumber(deli, person) {
    deli.push(person);
    return "Welcome, " + person + ". You are number " + deli.length + " in line.";
}
