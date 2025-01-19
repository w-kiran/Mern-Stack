//Dumb Way
/*
function square(n) {
    return n * n;
  }
  
  function cube(n) {
    return n * n * n;
  }
  
  function sumOfSquares(a, b) {
    let square1 = square(a);
    let square2 = square(b);
    return square1 + square2;
  }

  function sumOfcube(a, b) {
    let cube1 =cube(a);
    let cube2 =cube(b);
    return cube1 + cube2;
  }
  
  let ans1 = sumOfSquares(1, 2);
    console.log(ans1);
  let ans2 = sumOfcube(1, 2);
console.log(ans2);

*/

function square(n) {
    return n * n;
  }
  
  function cube(n) {
    return n * n * n;
  }

  function quad(n) {
    return n * n * n *n;
  }
  
  function sumOfSomething(a, b, fn) {
    let fn1 = fn(a);
    let fn2 = fn(b);
    return fn1 + fn2;
  }

  
    let ans = sumOfSomething(1, 2, quad);
    console.log(ans);
