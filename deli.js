
function takeANumber(arr, name){
	arr.push(name);
	return `Welcome, ${name}. You are number ${arr.length} in line.`
}

function nowServing(arr){
	if (arr.length < 1){
		return 'There is nobody waiting to be served!'
	} 
	
	return `Currently serving ${arr.shift()}.`
}

function currentLine(arr){
	var msg = `The line is currently: `;
	if (arr.length < 1) {
		return "The line is currently empty."
	} 
	
	var temp = [];
	arr.forEach(function(item, index){
		temp.push(`${index + 1}. ${item}`);
	})
	return msg + temp.join(', ');
	
}