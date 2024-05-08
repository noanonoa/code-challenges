//PROMPT
//Given an array of integers between 1 and n, inclusive, where n is the length of the array, write a function that returns the first integer that appears more than once (when the array is read from left to right).

//In other words, out of all the integers that might occur more than once in the input array, your function should return the one whose first duplicate value has the minimum index.

//If no integer appears more than once, your function should return -1.

//NOTE
//You're allowed to mutate the input array.

//SAMPLE
//INPUT:    array = [2, 1, 5, 2, 3, 3, 4]
//OUTPUT:   int = 2

//INPUT 2:  array = [2, 1, 5, 3, 3, 2, 4]
//OUTPUT 2:  int = 3

require('process')
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
})
process.stdin.setEncoding('utf8')
rl.question('input array of numbers separated by space: ', input => {
  const array = input.split(' ').map(Number)
  
  console.log(firstDuplicateValue(array))
  process.exit()
})

//SOLUTION
function firstDuplicateValue(array) {
  // Write your code here.
  let hash = {};
  for (let i = 0; i < array.length; i++) {
    let num = array[i]
    if (num in hash) {
      return num
    }
    hash[num] = (hash[num] || 0) + 1
  }
  return -1;
}