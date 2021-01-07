// PROMPT
// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 >> [5,4,3,2,1]

require('process');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
})
process.stdin.setEncoding('utf8')
rl.question('type in a number to reverse: ', input => {
  const n = Number(input);

  console.log(reverseSeq(n));
  console.log(reverse(n));
  process.exit();
})

// SOLUTION
const reverseSeq = n => {
  if (n === 0) return []
  let i = 0
  let reverse = []
  while (i < n) {
    reverse.unshift(i + 1)
    i++
  }
  return reverse;
};

// ANOTHER SOLUTION
const reverse = n => {
  let array = []
  if (n === 0) return []
  for (i = n; i > 0; i--) {
    array.push(i)
  }
  return array
}
