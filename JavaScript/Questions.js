// Reverse a string (simple loop)
function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log(reverseString("Hello World")); 

/*Palindrome*/
function isPalindrome(str) {
    const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    for (let i = 0, j = normalized.length - 1; i < j; i++, j--) {
        if (normalized[i] !== normalized[j]) {
            return false;
        }
    }
    return true;
}
console.log(isPalindrome("raceacar")); 

// Count vowels in a string 
function countVowels(str) {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.indexOf(str[i]) !== -1) {
            count++;
        }
    }
    return count;
}
console.log(countVowels(" GLA University")); 

/*Convert First Letter of Each Word to Uppercase*/
function titleCase(str) {
    const words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }
    return words.join(" "); 
}
console.log(titleCase("gla University"));



/*first non-repeating character*/
function firstNonRepeatingChar(str) {
    const counts = {};
    for (const ch of str) counts[ch] = (counts[ch] || 0) + 1;
    for (const ch of str) if (counts[ch] === 1) return ch;
    return null;
}
console.log(firstNonRepeatingChar("abacabad"));