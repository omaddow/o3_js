/*
Write a function removeLastVowel(word) that takes in a string and returns the string with its last vowel removed.
*/
const removeLastVowel = word => {
    let vowel = 'aeiouAEIOU';
    for (let i = word.length - 1; i >= 0; i--) {
        if (vowel.includes(word[i])) {
            return word.slice(0, i) + word.slice(i + 1); 
        }
    }
    return word;
}
console.log(removeLastVowel('bootcamp')); // 'bootcmp'
console.log(removeLastVowel('better')); // 'bettr'
console.log(removeLastVowel('graph')); // 'grph'
console.log(removeLastVowel('thy')); // 'thy'