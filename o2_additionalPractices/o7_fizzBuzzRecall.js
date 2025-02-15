/* 
Write a function fizzBuzz(max) that accepts a number as an arg. The function should return an array containing all positive numbers less than max that are divisible by either 3 or 5, but not both.
*/

let fizzBuzz = function (max) {
    let numbers = [];
    for (let i = 3; i < max; i++) {
        if (i % 3 === 0 ^ i % 5 === 0) {
            numbers.push(i);
        }
    }
    return numbers;
}

console.log(fizzBuzz(12)); // [ 3, 5, 6, 9, 10 ]
console.log(fizzBuzz(20)); // [ 3, 5, 6, 9, 10, 12, 18 ]

/*
Explanation:
Function Definition:

The function fizzBuzz(max) is defined to take a max parameter, which indicates the upper limit up to which we check numbers.
The goal is to return an array of numbers that are divisible by either 3 or 5, but not both.
Initialize the numbers array:

let numbers = []; creates an empty array that will be used to store the valid numbers that satisfy the condition.
Looping from i = 3 to i < max:

The for loop starts from i = 3 and goes up to i < max. This ensures the loop checks all numbers starting from 3 and stops before reaching max.
Condition: i % 3 === 0 ^ i % 5 === 0:

This is where it gets interesting! The ^ operator is the XOR (exclusive OR) operator, which is being used to check if one of the conditions is true, but not both.
i % 3 === 0: Checks if the number is divisible by 3.
i % 5 === 0: Checks if the number is divisible by 5.
XOR (^) Explanation:
XOR returns true only when one condition is true and the other is false. In other words, if a number is divisible by either 3 or 5, but not both, the XOR condition will be true and that number will be added to the numbers array.
For example:
If i = 6, 6 % 3 === 0 and 6 % 5 !== 0. XOR will return true, so 6 will be added to the array.
If i = 15, 15 % 3 === 0 and 15 % 5 === 0. XOR will return false because both conditions are true (i.e., divisible by both 3 and 5), so 15 will not be added to the array.
Pushing to the array:

If the condition i % 3 === 0 ^ i % 5 === 0 evaluates to true, the number i is pushed into the numbers array.
Return the array:

Once the loop finishes, the function returns the numbers array containing all numbers that are divisible by 3 or 5, but not both.
Example Walkthrough:
fizzBuzz(12):

Loop goes from 3 to 11.
3 % 3 === 0 (divisible by 3), 3 % 5 !== 0 (not divisible by 5) → added.
4 % 3 !== 0, 4 % 5 !== 0 → skipped.
5 % 3 !== 0, 5 % 5 === 0 (divisible by 5), 5 % 3 !== 0 → added.
6 % 3 === 0, 6 % 5 !== 0 → added.
7 % 3 !== 0, 7 % 5 !== 0 → skipped.
8 % 3 !== 0, 8 % 5 !== 0 → skipped.
9 % 3 === 0, 9 % 5 !== 0 → added.
10 % 3 !== 0, 10 % 5 === 0 → added.
Result: [3, 5, 6, 9, 10].
fizzBuzz(20):

Loop goes from 3 to 19.
3, 5, 6, 9, 10, 12, 18 will be added because they are divisible by either 3 or 5, but not both.
Result: [3, 5, 6, 9, 10, 12, 18].
Output:
fizzBuzz(12) will return: [3, 5, 6, 9, 10]
fizzBuzz(20) will return: [3, 5, 6, 9, 10, 12, 18]
Key Point:
The XOR (^) operator ensures that only numbers divisible by either 3 or 5 (but not both) are included in the result.
*/