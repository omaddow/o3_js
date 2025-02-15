/*
Write a function leastCommonMultiple(num1, num2) that accepts two numbers as arguments. The functions should return the smallest number that is divisible by both num1 and num2.
*/
const gcd = (a, b) => {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
};
const leastCommonMultiple = (num1, num2) => {
    return Math.abs(num1 * num2) / gcd (num1, num2);
}

console.log(leastCommonMultiple(4, 6)); // 12
console.log(leastCommonMultiple(3, 5)); // 15
console.log(leastCommonMultiple(2, 10)); // 10

/*
1. gcd Function (Greatest Common Divisor)
The first part of the code defines a function called gcd, which computes the greatest common divisor of two numbers a and b.

javascript
Copy
const gcd = (a, b) => {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
};
Input: Two numbers a and b.
Process: The function uses Euclid's algorithm to find the greatest common divisor (GCD). The core idea is to repeatedly replace a by b and b by the remainder of a % b until b becomes 0. When b is 0, a will be the GCD.
Detailed breakdown:
while (b !== 0): This loop runs until b becomes zero. The Euclidean algorithm ensures that at each step, a is replaced by b, and b is replaced by the remainder of a % b.
let temp = b;: The value of b is stored in temp so we can later update a.
b = a % b;: This step computes the remainder when a is divided by b. This remainder is assigned to b.
a = temp;: The value of a is now updated to the previous value of b, stored in temp.
return a;: Once b becomes 0, the function returns a, which is the GCD.
2. leastCommonMultiple Function (Least Common Multiple)
The second function leastCommonMultiple calculates the least common multiple (LCM) of two numbers num1 and num2.

javascript
Copy
const leastCommonMultiple = (num1, num2) => {
    return Math.abs(num1 * num2) / gcd(num1, num2);
}
Input: Two numbers num1 and num2.
Process: The formula to calculate the LCM of two numbers is:

            𝐿𝐶𝑀 (𝑎, 𝑏) = ∣𝑎 × 𝑏∣ / 𝐺𝐶𝐷(𝑎, 𝑏)

 
This formula works because multiplying two numbers a and b gives a multiple of both numbers. The GCD of a and b represents the largest common divisor, so dividing the product of a and b by their GCD removes the shared factors, leaving only the least common multiple.

Math.abs(num1 * num2): The absolute value of the product of num1 and num2 is computed. The absolute value ensures the result is always positive, as LCM is always non-negative.
gcd(num1, num2): The gcd function is called to get the greatest common divisor of num1 and num2.
return ...: The LCM is then returned as the absolute product of the two numbers divided by their GCD.
3. Examples (Calling the Functions)
Now, the code demonstrates how the leastCommonMultiple function works with a few test cases:

javascript

console.log(leastCommonMultiple(4, 6)); // 12
console.log(leastCommonMultiple(3, 5)); // 15
console.log(leastCommonMultiple(2, 10)); // 10
First Example (leastCommonMultiple(4, 6)):

GCD of 4 and 6 is 2 (because 4 and 6 share a common divisor of 2).
LCM = |4 * 6| / GCD(4, 6) = 24 / 2 = 12.
The output is 12.
Second Example (leastCommonMultiple(3, 5)):

GCD of 3 and 5 is 1 (since 3 and 5 are coprime, meaning they have no common divisors except 1).
LCM = |3 * 5| / GCD(3, 5) = 15 / 1 = 15.
The output is 15.
Third Example (leastCommonMultiple(2, 10)):

GCD of 2 and 10 is 2 (because both are divisible by 2).
LCM = |2 * 10| / GCD(2, 10) = 20 / 2 = 10.
The output is 10.
Summary
The gcd function finds the greatest common divisor using Euclid's algorithm.
The leastCommonMultiple function computes the least common multiple using the formula LCM(a, b) = |a * b| / GCD(a, b).
The results for the test cases are correctly computed as 12, 15, and 10.
This is a good example of how to use the GCD to efficiently calculate the LCM!
*/