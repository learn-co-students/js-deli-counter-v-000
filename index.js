
function takeANumber(current_line, name){
	current_line.push(name);
	return "Welcome, " + name + ". You are number " + current_line.length + " in line."
}

function nowServing(current_line){
	if (current_line.length === 0){
		return "There is nobody waiting to be served!";
	} else {
	return "Currently serving " + current_line.splice(0, 1) + ".";
	}
}

function currentLine(current_line){
	if (current_line.length === 0){
		return "The line is currently empty.";
	} else {
		var string = " "
		current_line.forEach(function(person, index){
			if(index !== current_line.length - 1){
				var number = index + 1;
				string += number + ". " + person + ", ";
			} else {
				var number = index + 1;
				string += number + ". " + person;
			}
		});
 	}
		return "The line is currently:" + string;
}

