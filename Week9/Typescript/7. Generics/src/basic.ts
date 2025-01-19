// Generics are a language independent concept (exist in C++ as well)

// Problem Statement
// Let’s say you have a function that needs to return the first element of an array. Array can be of type either string or integer.
// How would you solve this problem?
// Solution
// function getFirstElement(arr: (string | number)[]) {
//     return arr[0];
// }

// const el = getFirstElement([1, 2, 3]);

// What is the problem in this approach?
// User can send different types of values in inputs, without any type errors
// function getFirstElement(arr: (string | number)[]) {
//   return arr[0];
// }

// const el = getFirstElement([1, 2, '3']);

// Typescript isn’t able to infer the right type of the return type
// function getFirstElement(arr: (string | number)[]) {
//     return arr[0];
// }

// const el = getFirstElement(["harkiratSingh", "ramanSingh"]);
// console.log(el.toLowerCase())

// Solution - Generics
// Generics enable you to create components that work with any data type while still providing compile-time type safety.
// function identity<T>(arg: T): T {
//     return arg;
// }
// let output1 = identity<string>("myString");
// let output2 = identity<number>(100);

// Solution to original problem
// Can you modify the code of the original problem now to include generics in it?
function getFirstElement<T>(arr: T[]) {
    return arr[0];
}

// const el1 = getFirstElement <string> (["harkiratSingh", "ramanSingh"]);
const el = getFirstElement(["harkiratSingh", "ramanSingh"]);
console.log(el.toLowerCase())
console.log(el.toUpperCase())