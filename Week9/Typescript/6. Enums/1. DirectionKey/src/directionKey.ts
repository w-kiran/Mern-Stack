// Enums (short for enumerations) in TypeScript are a feature that allows you to define a set of named constants.
// The concept behind an enumeration is to create a human-readable way to represent a set of constant values, which might otherwise be represented as numbers or strings.

enum Direction {
  Up,    //0
  Down,  //1
  Left,  //2
  Right  //3
}

// To change values.
// enum Direction {
//   Up = 1,
//   Down, // becomes 2 by default
//   Left, // becomes 3
//   Right // becomes 4
// }

// Can also be strings
// enum Direction {
//   Up = "UP",
//   Down = "Down",
//   Left = "Left",
//   Right = 'Right'
// }

function doSomething(keyPressed: Direction) {
// do something.
if(keyPressed == Direction.Up){

}
}

doSomething(Direction.Up);
doSomething(Direction.Down);
doSomething(Direction.Left);
doSomething(Direction.Right);

console.log(Direction.Up);
console.log(Direction.Down);
console.log(Direction.Left);
console.log(Direction.Right);

