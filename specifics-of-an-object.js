// prompt:
// Create a function that returns the values of an object which are numbers, and the keys of objects which have methods as values.
  // array should return numbers first, then all the method names in the order they are in the object.
  // strings, booleans, arrays should be ignored.
  // if the object is empty, then the array should return the follwing string: "The Object is Empty".

// Sample:
// returnSpecifics({a:1,b:'str',c:2,d:true,e:function(a){return a;},f:3,g:[1,2,3]})
// This would return [1, 2, 3, 'e']

// solution:
let sample = {
  a: 1,
  b: 'str',
  c: 2,
  d: true,
  e: function(a) {
    return a;
  },
  f: 3,
  g: [1, 2, 3]
}
let emptyObj = {};

function returnSpecifics(obj) {
  // if object is empty, return ["The Object is Empty"]
  let keys = Object.keys(obj); // array ['a', 'b', 'c', 'd', 'e', 'f', 'g']
  if (keys.length < 1) return ["The Object is Empty"];

  let numbers = new Array();
  let strings = new Array();

  for (let i = 0, key; key = keys[i]; i++) {
    let value = obj[key];
    let type = typeof value;
    
    if (type == 'number') numbers.push(value);
    if (type == 'function') strings.push(value);
  }
  return [...numbers, ...strings];
}

console.log(returnSpecifics(sample))