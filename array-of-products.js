// prompt
// Write a function that takes in a non-empty array of integers and returns an array of the same length, 
// where each element in the output array is equal to the product of every other number in the input array.
// In other words, the value at output[i] is equal to the product of every number in the input array other than input[i].

// sample
// input: array = [5, 1, 4, 2]
// output: [8, 40, 10, 20]
// 8 is equal to 1 x 4 x 2
// 40 is equal to 5 x 4 x 2
// 10 is equal to 5 x 1 x 2
// 20 is equal to 5 x 1 x 4

require('process');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
})
process.stdin.setEncoding('utf8');
rl.question('input numbers separated by space: ', input => {
  // convert input to array of numbers
  const arr = input.toString().split(' ').map(Number);
  console.log(arrayOfProducts(arr));
  process.exit();
})

// solution
function arrayOfProducts(arr) {
  let result = [];
  
  for (let i = 0; i < arr.length; i++) {
    let product = 1;

    for (let j = 0; j < arr.length; j++) {
      // exclude the current[i] and multiply all other index 
      if (i !== j) product *= arr[j];
      // result at index i equals the product
      result[i] = product;
    }
  }
  return result;
}