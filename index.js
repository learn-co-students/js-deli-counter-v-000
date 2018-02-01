function takeANumber(line, name) {
	line.push(name);
	return "Welcome, " + name + ". You are number " + line.length + " in line.";
};

function nowServing(line) {
	if (line.length > 0) {
		var first_customer = line[0];
		line.splice(0, 1);
		return "Currently serving " + first_customer + ".";
	} else {
		return "There is nobody waiting to be served!";
	};
};

function currentLine(line) {
	if (line.length > 0) {
		var customer_list = [];
		line.forEach(function (customer, index) {
			var number = index + 1;
			customer_list.push(" " + number + ". " + customer);
		});
		return "The line is currently:" + customer_list;
	} else {
		return "The line is currently empty."
	};
};