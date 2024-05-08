// This kata is designed to test your ability to extend the functionality of built-in classes. 
// In this case, we want you to extend the built-in Array class with the following methods: square(), cube(), average(),
// sum(), even() and odd().

// Explanation:

// square() must return a copy of the array, containing all values squared
// cube() must return a copy of the array, containing all values cubed
// average() must return the average of all array values; on an empty array must return NaN
// sum() must return the sum of all array values
// even() must return an array of all even numbers
// odd() must return an array of all odd numbers
// Note: the original array must not be changed in any case!

/*
Example
var numbers = [1, 2, 3, 4, 5];

numbers.square();  // must return [1, 4, 9, 16, 25]
numbers.cube();    // must return [1, 8, 27, 64, 125]
numbers.average(); // must return 3
numbers.sum();     // must return 15
numbers.even();    // must return [2, 4]
numbers.odd();     // must return [1, 3, 5]
*/

// Solution:
Array.prototype.square = function() {
  let input = this;
  let result = [];
  for (let i = 0; i < input.length; i++) {
    let squared = input[i] * input[i];
    result = [...result, squared];
  };
  return result;
};
Array.prototype.cube = function() {
  let input = this;
  let result = [];
  for (let i = 0; i < input.length; i++) {
    let cubed = input[i] * input[i] * input[i];
    result = [...result, cubed];
  };
  return result;
};
Array.prototype.average = function() {
  let input = this;
  if (!input.length) return NaN;
  let sum = 0;
  for(let i = 0; i < input.length; i++) {
    sum += input[i];
  };
  let average = sum/input.length;
  return average;
};
Array.prototype.sum = function() {
  let input = this;
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    sum += input[i];
  };
  return sum;
};
Array.prototype.even = function() {
  let input = this;
  let evens = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] % 2 === 0) evens.push(input[i]);
  };
  return evens;
};
Array.prototype.odd = function() {
  let input = this;
  let odds = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] % 2 !== 0) odds.push(input[i]);
  };
  return odds;
};

let numbers = [1,2,3,4,5];
console.log(numbers.square());
console.log(numbers.cube());
console.log(numbers.average());
console.log(numbers.sum());
console.log(numbers.even());
console.log(numbers.odd());

/* another solution:
Array.prototype.square  = function () { return this.map(function(n) { return n*n; }); }
Array.prototype.cube    = function () { return this.map(function(n) { return n*n*n; }); }
Array.prototype.average = function () { return this.sum() / this.length; }
Array.prototype.sum     = function () { return this.reduce(function(a, b) { return a + b; }, 0); }
Array.prototype.even    = function () { return this.filter(function(item) { return 0 == item % 2; }); }
Array.prototype.odd     = function () { return this.filter(function(item) { return 0 != item % 2; }); }
*/