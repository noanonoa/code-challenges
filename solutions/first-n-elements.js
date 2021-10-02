/**
 * Create a method 'take' that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.
 */

require('process')
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
})
process.stdin.setEncoding('utf-8')
rl.question('input array elements separated by space: ', input => {
  const array = input.split(' ')
  
  rl.question('enter a number: ', input => {
    const n = input

    console.log(take(array, n))
    process.exit()
  })
})

function take(array, n){
  return array.slice(0, n)
}