//Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. 
//If any two numbers in the input array sum up to the target sum, the function should return an array of the pair values.

//Note that the target sum has to be obtained by summing two different integers in the array; 
//you can't add a single integer to itself in order to obtain the target sum

//You can assume that there will be at most one pair of numbers summing up to the target sum

//Sample Input
//array = [3, 5, -4, 8, 11, 1, -1, 6]
//targetSum = 10

//Sample Output
// [-1, 11] :  -1 + 11 == 10

require('process');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
})
process.stdin.setDefaultEncoding('utf8');
rl.question('enter array of numbers separated by space:  ', input => {
  const array = input.toString().split(' ').map(Number);

  rl.question('enter the target sum:  ', input => {
    const targetSum = parseInt(input);

    console.log(twoNumberSum(array, targetSum));
    process.exit();
  })
})


// solution
function twoNumberSum(array, targetSum) {
  let i = 0;
  let j = i + 1;
  
  while (i < array.length - 1) {
    //if they add up to targetSum, return the numbers in array
    if (array[i] + array[j] == targetSum) return [array[i], array[j]];
    j++;

    if (j == array.length) {
      i++;
      j = i + 1;
    }
  }
  // if they do not add up sum, return empty array
  return [];
}


// another solution
function twoNumSum(array, targetSum) {
  const nums = {};
  for (const num of array) {
    const potentialMatch = targetSum - num;
    if (potentialMatch in nums) {
      return [potentialMatch, num];
    } else {
      nums[num] = true;
    }
  }
  return [];
}