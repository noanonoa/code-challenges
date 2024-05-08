/*
Reverse Vowels of a String
Given a string "s", reverse only all the vowels in the string and return it.
The vowels are "a", "e", "i", "o", and "u", and they can appear in both cases.

Example 1:
Input:    s = "hello"
Output:   "holle"

Example 2:
Input:    s = "washington"
Output:   "woshingtan"
*/

require("process");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});
process.stdin.setEncoding("utf-8");
rl.question("Please enter any word to reverse its vowels: ", input => {
  const s = input;
  console.log(reverseVowels(s));
  process.exit();
});

const reverseVowels = (s) => {
  // empty strings and 1 character edge cases
  if (s.length === 0) return;
  if (s.length === 1) return s;

  // turn the string into an array
  let array = s.split("");

  // vowels of all cases
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  // pointers
  let leftPointer = 0;
  let rightPointer = s.length - 1;

  // while left pointer is less than right pointer, we want to check if there are any vowels on either side until the pointers meet and cross each other.
  while (leftPointer < rightPointer) {
    
    // we need to check the characters at each pointer and if they are not vowels, we can skip and continue.
    // thus, we have the current characters that are being evaluated.
    const leftCharacter = array[leftPointer];
    const rightCharacter = array[rightPointer];

    // if the left character is not in the vowels array, it's not a vowel.  We can skip to the next character.
    if (vowels.indexOf(leftCharacter) === -1) {
      leftPointer++;
      continue;
    }

    // if the right character is not in the vowels array, it's also not a vowel.  We can continue to the previous character.
    if (vowels.indexOf(rightCharacter) === -1) {
      rightPointer--;
      continue;
    }

    // if the function reached this line of code, that means both the left and right characters are vowels.  That's great!  These are the vowels we want to swap.
    array[leftPointer] = rightCharacter;
    array[rightPointer] = leftCharacter;

    // after swapping vowels, we iterate through the remaining characters and do the same until finished.
    leftPointer++;
    rightPointer--;
  };

  // once the array is finished swapping all vowels (if any), we can return it back as a string.
  return array.join("");
};