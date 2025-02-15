/*
Write a function hipsterfy(sentence) that takes in a sentence string and returns the sentence where every word is missing its last vowel.
*/
const hipsterfy = (sentence) => {
    // Split the sentence into words
    let words = sentence.split(' ');
    
    // Process each word
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        
        // Only modify words longer than 3 characters
        if (word.length > 3) {
            // Remove vowels from the word
            let newWord = '';
            for (let j = 0; j < word.length; j++) {
                // If the character is not a vowel, add it to newWord
                if (!'aeiouAEIOU'.includes(word[j])) {
                    newWord += word[j];
                }
            }
            // Update the word in the words array
            words[i] = newWord;
        }
    }

    // Join the words back into a sentence
    return words.join(' ');
};

// Test cases
console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'
