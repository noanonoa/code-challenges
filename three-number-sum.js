// prompt
// Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. 
// The function should find all triplets in the array that sum up to the target sum and returns a two-dimensional
// array of all these triplets. The numbers in each triplet should be ordered in ascending order, 
// and the triplets themselves should be ordered in ascending order with respect to the numbers they hold.

//If no three numbers sum up to the target sum, the function should return an empty array

// Sample 
// Input
    // array = [12, 3, 1, 2, -6, 5, -8, 6]
    // targetSum = 0
// Output
    // [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]

require('process');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
})
process.stdin.setEncoding('utf8');
rl.question('insert array of numbers separated by space:  ', input => {
  const array = input.toString().split(' ').map(Number);

  rl.question('insert target sum:  ', input => {
    const targetSum = parseInt(input);

    console.log(threeNumberSum(array, targetSum));
    process.exit();
  })
})


// solution    
function threeNumberSum(array, targetSum) {
  // sort the array
  array.sort( (a, b) => a - b);
  let result = [];
  
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      for (let k = j + 1; k < array.length; k++) {
        if (array[i] + array[j] + array[k] === targetSum) {
          result.push([array[i], array[j], array[k]])
        }
      }
    }
  }
  return result;
}

// another solution
function threeNumSum(array, targetSum) {
  array.sort((a, b) => a - b);
  const triplets = [];
  for (let i = 0; i < array.length - 2; i++) {
    let left = i + 1;
    let right = array.length - 1;
    while (left < right) {
      const currentSum = array[i] + array[left] + array[right];
      if (currentSum === targetSum) {
        triplets.push([array[i], array[left], array[right]]);
        left++;
        right--;
      } else if (currentSum < targetSum) {
        left++;
      } else if (currentSum > targetSum) {
        right--;
      }
    }
  }
  return triplets;
}