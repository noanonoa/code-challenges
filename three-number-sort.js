// PROMPT
// You're given an array of integers and another array of three distinct integers.  
// The first array is guaranteed to only contain integers that are in the second array, 
// and the second array represents a desired order for the integers in the first array.
// For example, a second array of [x, y, z] represents a desired order of 
// [x, x, ..., x, y, y, ..., y, z, z, ..., z] in the first array.

// Write a function that sorts the first array according to the desired order in the second array.

// The function should perform this in place (i.e., it should mutate the input array), 
// and it shouldn't use any auxiliary space
// (i.e., it should run with constant space: O(1) space).

// Note that the desired order won't necessarily be ascending or descending and that the 
// first array won't necessarily contain all three integers found in the second array--
// it might only contain one or two.

// SAMPLE INPUT & OUTPUT
// input:		array = [1, 0, 0, -1, -1, 0, 1, 1] 
//					order = [0, 1, -1]
// output: 	[0, 0, 0, 1, 1, 1, -1, -1]


//Array of integers
//Another array of 3 distinct integers
//First array = only contain integers from second array
//Second array = desired order for the integers in the first array
//Function that sorts first array according to second array order
//**First array may not have all three numbers from second array, just one or two
//**Every instance of that number needs to be in that order

require('process');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
})
process.stdin.setEncoding('utf8');
rl.question('enter array separated by space:  ', input => {
  const array = input.toString().split(' ').map(Number);

  rl.question('enter the order array separated by space:  ', input => {
    const order = input.toString().split(' ').map(Number);

    console.log(threeNumberSort(array, order));
    process.exit();
  })
})

// SOLUTION
function threeNumberSort(array, order) {
  // Write your code here.
  // empty array placeholder
  let result = [];

  // iterate through order
  for (let i = 0; i < order.length; i++) {
    // iterate through array
		for (let j = 0; j < array.length; j++) {
      // compare order[i] with array[j]
      if (order[i] === array[j]) {
        // add array[j] to result
				result = [...result, array[j]];
      }
    }
  }
  // return the sliced values in order
  return result;
}