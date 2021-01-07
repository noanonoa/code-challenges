// PROMPT
// You have the parameters parity and bin. Parity is always 'even' or 'odd'. 
// Your task is to return an integer (0 or 1).

// A parity bit, or check bit, is a bit added to a string of bits to ensure that 
// the total number of 1-bits in the string is even or odd. Parity bits are used 
// as the simplest form of error detecting code.

// Example:
  // Parity: 'even'
  // Bin: '0101010'
  // Result: 1
  // Because there is an odd number of 1-bits (3) you need to put another 1 to it to get an even number of 1-bits.

require('process')
const readLine = require('readline')
const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
})
process.stdin.setEncoding('utf8')
rl.question('input parity (odd or even) and the bin (010101) separated by a space: ', input => {
  const arr = input.split(' ')
  const parity = arr[0]
  const bin = arr[1]

  console.log(checkParity(parity, bin))
  console.log(anotherCheckParity(parity, bin))
  process.exit()
})

// SOLUTION
function checkParity(parity, bin) {
  // code below
  // parity is always going to be a string 'even' or 'odd'
  // return an integer, either 0 or 1

  let count = 0;
  // to solve this problem, we have to first check if the parity wants an even or odd number
  // if the parity we're given is even
  if (parity === 'even') {
    // then, we have to check how many times 1 shows up in the bin and determine whether it's odd or even times
    // and if that amount is an odd number, well the parity wants an even amount so we need to return 1
    // if that amount is an even number, the parity wants an even amount and we got that, so we just return 0
    for (let i = 0; i < bin.length; i++) {
      if (bin[i] === '1') count++;
    }
    return (count % 2 === 0) ? 0 : 1
  }
  // or else, we do the same for when the parity is 'odd'
  else if (parity === 'odd') {
    for (let i = 0; i < bin.length; i++) {
      if (bin[i] === '1') count++;
    }
    return (count % 2 === 1) ? 0 : 1
  }
}

// ANOTHER SOLUTION
function anotherCheckParity(p,s){
  return [...s].reduce((a,b)=>a ^ b==1,0) ^ p[0]=='o';
}