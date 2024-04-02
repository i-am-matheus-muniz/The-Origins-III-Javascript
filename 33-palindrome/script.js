let word = "noon";

function isPalindrome(word) {
    word = word.toLowerCase();
    reversedWord = word.split('').reverse().join('');
    
    if(reversedWord == word) {
        console.log("Word: " + word);
        console.log("Reversed: " + reversedWord);
        console.log("The word " + word + " is a palindrome!");
    } else {
        console.log("Word: " + word);
        console.log("Reversed: " + reversedWord);
        console.log("The word " + word + " is not a palindrome.");
    }
}

isPalindrome(word);