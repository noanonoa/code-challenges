// PROMPT
// Your team is writing a fancy new text editor and you've been tasked 
// with implementing the line numbering.

// Write a function which takes a list of strings and returns each line
// prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon 
// and space in between.

// Examples:

// number([]) // => []
// number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]

// SOLUTION
var number=function(array){
  //your awesome code here
  const values = {}
  const result = []
  let line = 1
  
  if (!array.length) return []
  
  for (let x of array) {
    values[line] = x
    result.push(`${line}: ${values[line]}`)
    line++
  }
  return result
}