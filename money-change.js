// prompt
// In this problem, you will design and implement an elementary greedy algorithm used by cashiers all over the world millions of times per day.
// The goal in this problem is to find the minimum number of coins needed to change the input value (an integer) into coins with denominations 1, 5, and 10.

// sample
// input:	2
// output:	2
// 2 = 1 + 1

// input:	28
// output:	6
// 28 = 10 + 10 + 5 + 1 + 1 + 1

// solution
// we know that the output is going to be an integer that is the length of an array.  The array that returns coin denominations [...10, ...5, ...1].
// input: 28 output: 6 (28 = 10 + 10 + 5 + 1 + 1 + 1)
function getChange(m) {
  let input = m;
  let denominations = [];
  let output = 0;
  
  // if zero return 0.
  if (m === 0) return output;

  // while input is greater than 0, run the loop.
  while (input > 0) {
  // if the input is divisible by 10, push 10 to denominations array.
    // is the (input - 10) >= 0 ? input - 10 and push 10 to denominations
    if (input - 10 >= 0) {
      input -= 10;
      denominations.push(10);
      output = denominations.length;
  // if the input is divisible by 5, push 5 to denominations array.
    // is the (input - 5) >= 0 ? input - 10 and push 5 to denominations
    } else if (input - 5 >= 0) {
      input -= 5;
      denominations.push(5);
      output = denominations.length;
      // if the input is divisible by 1, push 1 to denominations array.
      // is the (input - 1) >= 0 ? input - 1 and push 1 to denominations
    } else if (input - 1 >= 0) {
      input -= 1;
      denominations.push(1);
      output = denominations.length;
    }
  }
  // return output.
  return output;
}
console.log(getChange(2));
console.log(getChange(28));