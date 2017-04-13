function takeANumber (array, name) {
    array.push(name)

    var array_length = array.length

    return `Welcome, ${name}. You are number ${array_length} in line.`
}

function nowServing(array) {
    if (array.length > 0) {
        var first = array[0]

        array.shift() 

        return `Currently serving ${first}.`
    }else{
        return `There is nobody waiting to be served!`
    } 
}

function currentLine(array) {
    if (array.length > 0) {

    var new_array = []

    for (let count = 0, array_length = array.length; count < array_length; count++) //iterating over whole array 
    {
        new_array.push(`${count + 1}. ${array[count]}`) //pushes number plus period plus name of person at count index to new_array
    }

    return `The line is currently: ${new_array.join(', ')}` //joins every index value in new_array and appends it to return sentence


    }else{
        return `The line is currently empty.`
    } 
}
