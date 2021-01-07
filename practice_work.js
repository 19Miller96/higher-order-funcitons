// ### Task: (10 minutes)

// Using the `forEach` method, complete the following tasks:

// 1. Write a function called `getEvens` that takes an array of numbers as an argument and returns a new array that only contains the even numbers from the original array.

// 2. Write a function called `sumElements` that takes an array of numbers as an argument and returns the sum total of all the elements in the array.
// **Hint:** If you get stuck, start by writing the function using a `for of` loop, then refactor, replacing the `for` loop with the `forEach`.

// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// const getEvens = function (numbers) {
//     const result = [];

//     numbers.forEach( (number) => {
//         const equalZero = number % 2;
//         if(equalZero === 0){
//             result.push(number);
//         }
//     })

//     return result;
// }

// console.log(getEvens(myNumbers));

 const sumElements = (numbers) => {
//     let total = 0;

//     numbers.forEach( (number) => {
//         total += number;
//     });
//     return total;

    const total = numbers.reduce( (runningTotal, number) => {
        return runningTotal + number;
    }, 0);

    return total;
}

console.log(sumElements(numbers));
