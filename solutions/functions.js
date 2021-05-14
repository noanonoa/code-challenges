/**
 * Implement a function named factorial that has one parameter:
 * an integer, n
 * 
 * It must return the value of n! (i.e., n factorial)
 */

require('process');
const readLine = require('readline');
const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});
process.stdin.setEncoding('utf-8');
rl.question('Please enter a an integer for its factorial value: ', input => {
  const n = Number(input);

  console.log(factorial(n));
  process.exit();
});

const factorial = (n) => {
  let total = 1;

  while (n > 1) {
    total *= n;
    n--;
  }

  return total;
};