// PROMPT
// Your task is to sum the differences between consecutive pairs in the array in descending order.

// For example:

// sumOfDifferences([2, 1, 10])
// Returns 9
// Descending order: [10, 2, 1]
// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9
// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell).

require('process');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
})
process.stdin.setEncoding('utf8')
rl.question('input array separated by space: ', input => {
  const arr = input.split(' ').map(Number)

  console.log(sumOfDifferences(arr));
  console.log(anotherSumOfDifferences(arr));
  process.exit();
})

// SOLUTION
function sumOfDifferences(arr) {
  // if the array has one or less elements return 0
  if (arr.length <= 1) return 0
  
  //  sort the array from highest to lowest 
	const sorted = arr.sort( (a, b) => b - a)
  
  // you need to find the difference between the first pairs
  let result = []
  for (let i = 0, first, second; i < sorted.length - 1; i++) {
    first = arr[i]
    second = arr[i+1]
    result.push(first - second)
  }
  // find the sum between the differences
  return result.reduce((a, b) => a + b)
}

// ANOTHER SOLUTION
function anotherSumOfDifferences(arr) {
  return arr.sort((a,b) => b-a).shift() - arr.pop() || 0 // [2,1,10] == > [10,2,1] ==> 10-1 ==> 9 
}