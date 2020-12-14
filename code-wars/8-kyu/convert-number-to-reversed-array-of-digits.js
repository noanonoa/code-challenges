// prompt
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// sample
// 348597 => [7,9,5,8,4,3]

// solution
let sample = 348597;

function digitize(n) {
  //code here
  return String(n).split('').map(Number).reverse();
}

console.log(sample);
console.log(digitize(sample));