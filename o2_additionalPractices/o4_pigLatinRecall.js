/*
Pig Latin is a fun take on the English language where you move any consonant cluster from the start of the word to the end of the word; when words begin on a vowel, you simply add "-yay". Vowels are "aeiou".

Write a function pigLatinWord that takes in a word string and translates the word into Pig Latin. For this problem use the String.slice() method. The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.

Hint: Remember the String.includes method!
*/
// So the two rules for our version of Pig Latin are:

// 1. For words that start with a vowel, add 'yay' to the end of the word.
// 2. For words that start with a non-vowel, move all letters that come
// **before the first vowel** to the **end of the word** then add 'ay'

function pigLatinWord(word) {
    let vowel = 'aeiouAEIOU';
    if (vowel.includes(word[0])) {
        return word + 'yay';
    }
    for (let i = 0; i < word.length; i++) {
        if (vowel.includes(word[i])) {
            return word.slice(i) + word.slice(0, i) + 'ay';
        }
    }
    return word;
  };
  
  console.log(pigLatinWord("apple")); //=> "appleyay"
  console.log(pigLatinWord("eat")); //=> "eatyay"
  console.log(pigLatinWord("banana")); //=> "ananabay"
  console.log(pigLatinWord("trash")); //=> "ashtray"

/*
1. For Loop (for (let i = 0; i < word.length; i++)):
The for loop is set up to iterate over each character in the input word.
i starts at 0 and increments by 1 until i reaches word.length (the length of the word).
On each iteration, word[i] accesses the i-th character of the word.
2. Checking for a Vowel (if (vowels.includes(word[i]))):
Inside the loop, there's an if statement checking if the current character (word[i]) is a vowel.
vowels.includes(word[i]) checks if the current character exists in the string vowels, which is a string containing all vowels: 'aeiouAEIOU'.
If the current character is one of these vowels, the condition evaluates to true and the code inside the if block runs.
3. The return Statement:
Once the first vowel is found, the following code is executed:

javascript
Copy
return word.slice(i) + word.slice(0, i) + 'ay';
This line does a few things:

word.slice(i):

slice(i) returns a substring starting at index i and going to the end of the word.
This part grabs everything from the first vowel onward (including the vowel itself).
word.slice(0, i):

slice(0, i) returns a substring starting from the beginning (index 0) and going up to but not including index i.
This part grabs everything before the first vowel in the word.
Combining both parts with a +:

word.slice(i) + word.slice(0, i) rearranges the word such that the part before the first vowel moves to the end of the word.
The new word is then followed by 'ay'.
Example Breakdown
Let's use the word "banana" as an example:

vowels.includes(word[i]) is checked for each character.

For word[0] ('b'), the check fails (it's not a vowel).
For word[1] ('a'), the check passes (it's a vowel).
When the first vowel is found ('a' at index 1), the code executes:

javascript
Copy
return word.slice(1) + word.slice(0, 1) + 'ay';
word.slice(1) gives 'anana' (everything from index 1 onward).
word.slice(0, 1) gives 'b' (everything before index 1).
Combining them results in:

javascript
Copy
'anana' + 'b' + 'ay' = 'ananabay'
Thus, for the input "banana", the result is "ananabay".

Key Points to Note:
word.slice(i): Grabs the part of the word from the first vowel to the end.
word.slice(0, i): Grabs the part of the word before the first vowel.
+ 'ay': Adds 'ay' to the end of the transformed word.
This logic follows the Pig Latin rule for words starting with a non-vowel—moving all the letters before the first vowel to the end and adding 'ay'.
*/