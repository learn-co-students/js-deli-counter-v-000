function takeANumber(line, person) {
	line.push(person);
	return 'Welcome, ' + person + '. You are number ' + line.length + ' in line.';
}

function nowServing(line){
	if (line.length) {
		var person = line.splice(0, 1);
		return `Currently serving ${person}.`;
	} else {
		return 'There is nobody waiting to be served!';
	}
	
}

function currentLine(line){
	if (line.length) {
		const numbersAndNames = [];
		
		for (let i = 0, l = line.length; i < l; i++)
    	numbersAndNames.push(`${i + 1}. ${line[i]}`);
		
		return `The line is currently: ${numbersAndNames.join(', ')}`;
		
	} else {
		return 'The line is currently empty.';
	}
}