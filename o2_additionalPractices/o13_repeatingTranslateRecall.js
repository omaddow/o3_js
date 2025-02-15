/*
// Write a function repeatingTranslate that accepts a sentence as an argument.
// The function should translate the sentence according to the following rules:
//
// - words that are shorter than 3 characters are unchanged
// - words that are 3 characters or longer are translated according to the
//   following rules:
//   - if the word ends with a vowel, simply repeat the word twice (example:
//     'like'->'likelike')
//   - if the word ends with a non-vowel, repeat all letters that come after the
//     word's last vowel, including the last vowel itself (example:
//     'trash'->'trashash')
//
// Note that if words are capitalized in the original sentence, they should remain
// capitalized in the translated sentence. Vowels are the letters a, e, i, o, u.
//
// Can you reduce the problem into helper functions?

// Your code here



console.log(repeatingTranslate("we like to go running fast"));  // "we likelike to go runninging fastast"
console.log(repeatingTranslate("he cannot find the trash"));    // "he cannotot findind thethe trashash"
console.log(repeatingTranslate("pasta is my favorite dish"));   // "pastapasta is my favoritefavorite dishish"
console.log(repeatingTranslate("her family flew to France"));   // "herer familyily flewew to FranceFrance"
*/
// Helper function to check if a character is a vowel
function isVowel(char) {
    return 'aeiou'.includes(char.toLowerCase());
  }
  
  // Helper function to translate a word based on the rules
  function translateWord(word) {
    // If the word is shorter than 3 characters, return it unchanged
    if (word.length < 3) {
      return word;
    }
  
    // Check if the last character is a vowel
    const lastChar = word[word.length - 1];
    if (isVowel(lastChar)) {
      // If the word ends with a vowel, repeat the word twice
      return word + word;
    }
  
    // Otherwise, find the last vowel and repeat the part after it, including the vowel
    let lastVowelIndex = -1;
    for (let i = word.length - 1; i >= 0; i--) {
      if (isVowel(word[i])) {
        lastVowelIndex = i;
        break;
      }
    }
  
    // Return the word with the suffix after the last vowel
    const suffix = word.slice(lastVowelIndex);
    return word + suffix;
  }
  
  // Main function to translate the entire sentence
  function repeatingTranslate(sentence) {
    // Split the sentence into words, translate each word, and join them back together
    return sentence
      .split(' ')
      .map(word => translateWord(word))
      .join(' ');
  }
  
  // Testing the function
  console.log(repeatingTranslate("we like to go running fast"));  // "we likelike to go runninging fastast"
  console.log(repeatingTranslate("he cannot find the trash"));    // "he cannotot findind thethe trashash"
  console.log(repeatingTranslate("pasta is my favorite dish"));   // "pastapasta is my favoritefavorite dishish"
  console.log(repeatingTranslate("her family flew to France"));   // "herer familyily flewew to FranceFrance"
  