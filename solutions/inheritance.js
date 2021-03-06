/**
 * In this challenge, we practice implementing inheritance and use JavaScript prototypes to add a new method to an existing prototype.
 * Provided is the implementation for a Rectangle class.  Perform the following tasks:
 * 
 * 1. Add an area method to Rectangle's prototype
 * 2. Create a Square class that satisfies the following:
 *  - It is a subclass of Rectangle.
 *  - It contains a constructor and no other methods.
 *  - It can use the Rectangle class' area method to print the area of a Square object.
 */

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

/**
 * Write code that adds an 'area' method to the Rectangle class' prototype
 */
Rectangle.prototype.area = function(){
  return this.height * this.width;
}
const smallRectangle = new Rectangle(2, 5);
console.log(smallRectangle); // Rectangle { height: 2, width: 5 }
console.log(smallRectangle.area()); // 10

/**
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */
class Square extends Rectangle {
  constructor(length) {
    super();
    this.height = length;
    this.width = length;
  }
}
const largeSquare = new Square(10);
console.log(largeSquare); // Square { height: 10, width: 10 }
console.log(largeSquare.area()); // 100