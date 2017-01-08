var katzDeliLine = [];
function takeANumber(katzDeliLine, personName) {
	katzDeliLine.push(personName);
	return `Welcome, ${personName}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(line) {
	if (line.length == 0){
		return "There is nobody waiting to be served!";
	}
	else {
			//let person = line.splice(0, 1);
		return `Currently serving ${line.splice(0, 1)}.`;
	}
}

function currentLine(line) {
	if (line.length == 0){
		return "The line is currently empty.";
	}
	else{
		let personPos = []
		line.forEach(function(person, index){
			personPos.push(`${index + 1}. ${person}`)
		});
		return `The line is currently: ${personPos.join(', ')}`;
	}
}
debugger;
