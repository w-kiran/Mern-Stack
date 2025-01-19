// function sum(a,b)
// {
//     return a+b;
// }

// const sum =(a,b) =>
// {
//     return a+b;
// }
// both are same


//Map function to transform array.
const arr = [1, 2, 3, 4, 5];
// dumb way
// const newArray = [];
// for (let i = 0; i < input.length; i++) {
//   newArray.push(input[i] * 2);
// }
// console.log(newArray);

function transform(i) {
    return i * 2;
  }
  
  const ans = arr.map(transform);
  console.log(ans);


//Filtering function to filter all even number.

// Dumb Way
// const newArr = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 0) {
//     newArr.push(arr[i]);
//   }
// }
// console.log(newArr);

function filterEven(n) {
  if (n % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

const ans1 = arr.filter(filterEven);
console.log(ans1);

// create a map fn that takes an array and a
// transform fn as input and returns the transformed
// array as output.
const map = (arr, fn) => {
    const transformedArr = [];
    for (let i = 0; i < arr.length; i++) {
      transformedArr.push(fn(arr[i]));
    }
    return transformedArr;
  };



