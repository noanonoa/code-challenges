// Prompt
// Coding in function pickIt, function accept 1 parameter:arr, it's a number array, we need traverse arr by using for loop, if element is odd number, push it to array odd, if it's a even number, push it to array even.
// I've defined two array odd and even in the function, and also wrote the return statement. your work is write a for loop.

require('process');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
})
process.stdin.setEncoding('utf8');
rl.question('Enter numbers separated by space to be checked for odd or even:  ', input => {
  const arr = input.toString().split(' ').map(Number);

  console.log(pickIt(arr));
  process.exit();
})

// Solution
function pickIt(arr){
  var odd=[],even=[];
  //coding here
  for (let i = 0; i < arr.length; i++) {
    arr[i] % 2 == 0 ? even.push(arr[i]) : odd.push(arr[i]);
  }
  return (`odd: ${[odd]}  even: ${[even]}`);
}

// Another solution
function anotherPickIt(arr){
  var odd=[],even=[];
  for (let x of arr) {
    ((x % 2) == 0 ? even : odd).push(x);
  }
  return (`odd: ${[odd]}  even: ${[even]}`);
}