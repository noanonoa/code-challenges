/*
Complete the solution so that the function will break up camel casing, using a space between words.

Example
solution("camelCasing")  ==  "camel Casing"
solution("camelCasingTest")  ==  "camel Casing Test"
*/

// solution
function solution(string) {
  // code here
  let array = string.split('');
  let result = [];

  // to solve this problem we need to iterate through the string and find a Capital letter
  for (let i = 0; i < array.length; i++) {
    let letter = array[i];
    if (letter === letter.toLowerCase()) result.push(letter);
    
    // if a Capital letter exists, we need to add a space before it
    else if (letter === letter.toUpperCase()) {
      result.push(' ');
      result.push(letter);
    }
  };
  return result.join('');
};

console.log(solution('camelCasing'));


// another solution
function anotherSolution(string) {
  return(string.replace(/([A-Z])/g, ' $1'));
}

console.log(anotherSolution('camelCasingTest'));