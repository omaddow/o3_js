/*
Write a function choosePrimes(nums) that takes in an array of numbers as args. The function should return a new array containing the primes from the original array. A prime number is a number that is only divisible by 1 and itself. Hint: consider creating a helper function to check if a number is prime!
*/
const choosePrimes = nums => {
    let primes = [];
    
    // Loop through each element in the array
    for (let num of nums) {
        let isPrime = true;
        
        // Check divisibility starting from 2 up to the square root of num
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break; // Exit early if divisible
            }
        }
        
        // If the number is prime, add it to the primes array
        if (isPrime && num > 1) {
            primes.push(num);
        }
    }
    
    return primes;
}
console.log(choosePrimes([36, 48, 9, 13, 19])); // [ 13, 19 ]
console.log(choosePrimes([5, 6, 4, 11, 2017])); // [ 5, 11, 2017 ]