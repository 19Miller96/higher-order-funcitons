// Function is a first class object
// const add = function(num1, num2) {
//     return num1 + num2;
// }

// const subtract = function(num1, num2) {
//     return num1 - num2;
// }

// Higher Order Function
// const calculate = function(num1, num2, cb) {
//     let result = cb(num1, num2);
//     return result;
// }

// Callbacks
// let result = calculate(10, 20, add);
// console.log(result);
// result = calculate(20, 15, subtract);
// console.log(result);
// result = calculate(20, 10, function(a, b) {
//     return a * b;
// });

// Built-in Array Methods
const myNumbers = [1, 2, 3, 4, 5];

// for (let number of myNumbers) {
//     console.log(`This is number ${number}`);
// }

// forEach
// myNumbers.forEach( (number, index) => {
//     console.log(`This is number ${number} at index position ${index}`);
// })

const multiplyByTwo = function (numbers) {
    // const result = [];

    // numbers.forEach( (number) => {
    //     const multiplied = number * 2;
    //     result.push(multiplied);
    // });

    // return result;

    const result = numbers.map( (number) => {
        return number * 2;
    });
    return result;
}

console.log(multiplyByTwo(myNumbers));

// map
