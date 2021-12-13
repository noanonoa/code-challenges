/**
 * Prompt
 * 
 * Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.
 * 
 * Example:
 * arr = [1, 1, 0, -1, -1]
 * 
 * There are n = 5 elements, two positive, two negative, and one zero.  Their ratios are 2/5 = 0.400000 and 2/5 = 0.400000 and 1/5 = 0.200000
 * Results are printed as: 
 * 0.400000
 * 0.400000
 * 0.200000
 */

require('process')
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
})
process.stdin.setEncoding('utf8')
rl.question('insert numbers separated by space:  ', input => {
  const arr = input.toString().split(' ').map(Number)

  console.log(plusMinus(arr))
  process.exit()
})

function plusMinus(arr){
  let pos = 0,
      neg = 0,
      zero = 0
  // iterate through array
  for (integer of arr) {
    if (integer < 0){
      neg++
    }
    if (integer > 0){
      pos++
    }
    else zero++
  }
  return `${(pos/arr.length).toFixed(6)}\n${(neg/arr.length).toFixed(6)}\n${(zero/arr.length).toFixed(6)}`
}