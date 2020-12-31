// prompt
// This time no story, no theory. The examples below show you how to write function accum:

// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

// solution:
function accum(s) {
  // your code
  // new array
  let arr = [];

  // loop through string and push to array the string value at i
  for (let i = 0; i < s.length; i++) {
    // each iteration increases length of the next letter occurrence by 1
    arr.push(format(s[i], i + 1));
  }
  
  function format(s, n) {
    // the first letter must be upper cased
    let letter = s.toUpperCase();
    // the remainder must be lower cased
    while (letter.length != n) {
      letter += s.toLowerCase();
    }
    return letter;
  }
  // join array by "-"
  return arr.join('-');
}

console.log(accum("abcd"));