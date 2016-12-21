function takeANumber(katzDeliLine, name) {
    katzDeliLine.push(name);
    return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
    if (katzDeliLine.length > 0) {
        var first = katzDeliLine.splice(0, 1);
        return `Currently serving ${first}.`;
    } else {
        return "There is nobody waiting to be served!";
    }
}

function currentLine(katzDeliLine) {
    if (katzDeliLine.length > 0) {
        var line = new Array();
        katzDeliLine.forEach(function(name, index) {
            var num = index + 1;
            line.push(num + ". " + name);
        });
        return "The line is currently: " + line.join(", ");
    } else {
        return "The line is currently empty.";
    }
}