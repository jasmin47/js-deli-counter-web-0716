var katzDeli = []
var otherDeli = []
function takeANumber(line, person){
  var katz_position = line.length + 1
  var other_position = line.length  + 1
  if (line === katzDeli){
  line.push(person)
  return `Welcome, ${person}. You are number ${katz_position} in line.`
  }
  else {
  line.push(person)
  return `Welcome, ${person}. You are number ${other_position} in line.`}
}

function nowServing(line){
  if (line.length === 0) {
  return 'There is nobody waiting to be served!'}
  else {
    var first = line.shift()
    return `Currently serving ${first}.`
  }
}


function currentLine(line) {
  if (line.length === 0) {
    return `The line is currently empty.`
  }
  else {
  var message = []
  message.push('The line is currently:')
  var position
  for (position = 0; position < line.length; position ++){
    var linePosition = position + 1
    var person = line[position]
    message.push(`${linePosition}. ${person},`)
  }
}

return message.join(" ").slice(0,-1)
}
