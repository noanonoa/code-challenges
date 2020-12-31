// Prompt
// You are given an odd-length array of integers, in which all of them are the same,
// except for one single number.
// Complete the method which accepts such an array, and returns that single different number.
// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

require('process')
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
})
process.stdin.setEncoding('utf8')
rl.question('input array of repeated numbers and a stray number separated by space:  ', input => {
  const arr = input.split(' ').map(Number)

  console.log(stray(arr))
  console.log(anotherSolution(arr))
  process.exit()
})

// Solution
function stray(arr) {
  // set the first number
  const number = arr[0]
  // if it is different then the next two, I have found my solution
  if (number !== arr[1] && number !== arr[2]) return number
  
  // but if not, then traverse the array and find the first different value
  for (let x of arr) {
    if (x !== number) return x
  }
}

function anotherSolution(arr){
  for (var i in arr){
    // if the stray number's index value at its first occurrence is equal to the index value of its last occurrence, then we have the one number that is different
    let number = arr[i]
    if (arr.indexOf(number) === arr.lastIndexOf(number)) return number
  }
}