/* 
In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Example:

makeNegative(1); // return -1
makeNegative(-5); // return -5
makeNegative(0); // return 0
makeNegative(0.12); // return -0.12
Notes:

The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.
*/


require('process');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});
process.stdin.setEncoding('utf8');
rl.question('enter a number to make negative: ', input => {
  const sum = input;

  console.log(makeNegative(sum));
  process.exit();
});

// solution
function makeNegative(sum) {
  //code here
  if (sum === 0) return 0;
  return sum < 0 ? sum : -sum;
}