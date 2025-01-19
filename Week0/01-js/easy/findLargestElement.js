/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/
let numbers=[3, 7, 2, 9, 1]
function findLargestElement(numbers) {
    let biggestElement = numbers[0];

    for (let i=0;i<numbers.length; i++)
        {
            if (numbers[i]>biggestElement)
                {
                    biggestElement=numbers[i]
                }
        }
        return biggestElement;
}
var a=findLargestElement(numbers)
console.log(a)

