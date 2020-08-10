function takeANumber(katzDeli, person){
	katzDeli.push(person);
	return "Welcome, "+person+". You are number "+katzDeli.length+" in line.";
}

function nowServing(deliLine){
	if (deliLine.length == 0){
		return "There is nobody waiting to be served!";
	} else {
		var servedPerson = deliLine.splice(0,1);
		return "Currently serving "+servedPerson+".";
	}
}

function currentLine(deliLine){
	if (deliLine.length == 0){
		return "The line is currently empty.";
	} else {
		var lineString = "The line is currently: ";
		deliLine.forEach(function(lineMember, index){
			lineString = lineString + (index+1)+". "+lineMember+", ";
		});
		return lineString.substring(0,(lineString.length-2));
	}

}