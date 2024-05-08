/*
* Find Intersection
*
* Have the function `FindIntersection(strArr)` read the array of strings stored in `strArr` which will contain 2 elements: the first element will represent a list of comma-separated numbers sorted in ascending order, the second element will represent a second list of comma-separated numbers (also sorted). Your goal is to return a comma-separated string containing the numbers that occur in elements of `strArr` in sorted order. If there is no intersection, return false.
*/

// O(n) solution

function findIntersection(strArr){
  const arr1 = strArr[0].split(', ');
  const arr2 = strArr[1].split(', ');
  let arrValues = {};
  let results = [];

  setOccurrence(arr1, arrValues);
  checkOccurrence(arr2, arrValues);

  function setOccurrence(arr, obj){
    arr.forEach( val => obj[val] = true);
  };

  function checkOccurrence(arr, obj){
    arr.forEach( val => obj[val] ? results.push(val) : obj[val] = true);
  };

  return (results.length > 0) ? results.join(',') : false;
};

console.log(findIntersection(['1, 3, 4, 7, 13', '1, 2, 4, 13, 15'])); // => '1,4,13'
console.log(findIntersection(['1, 2, 3, 4', '5, 6, 7, 8'])); // => false
