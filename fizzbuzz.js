// prompt
// print the numbers 1 - 100.  But, if the number is divisible by 3, print "Fizz".  If the number is divisible by 5, print "Buzz".  Finally, if the number is divisble by 3 and 5, print "FizzBuzz".

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    // if % 3 and % 5 == 0 print FizzBuzz
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz");
      // if % 3 == 0 print Fizz
    } else if (i % 3 == 0) {
      console.log("Fizz"); 
      // if % 5 == 0 print Buzz
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else {
      // print numbers 1 - 100
      console.log(i);
    }
  }
}
fizzBuzz(100);