function takeANumber(deli, person) {
	deli.push(person);
	var number = deli.indexOf(person) + 1;
	return `Welcome, ${person}. You are number ${number} in line.`;
}

function nowServing(deli) {
	if (deli.length == 0) {
		return "There is nobody waiting to be served!";
	}
	else {
		var serving = deli.shift();
		return `Currently serving ${serving}.`;
	}
}

	function currentLine(deli) {
		if (deli.length == 0) {
			return "The line is currently empty.";
		}
		else {
			var line_statement = "The line is currently:";
			deli.forEach(function(person, index) {
				line_statement += ` ${index + 1}. ${person},`;
			});
			var final_statement = line_statement.substring(0, line_statement.length - 1);
			return final_statement;
		}
	}