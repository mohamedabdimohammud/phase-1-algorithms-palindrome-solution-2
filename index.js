function isPalindrome(word) {
  // Convert the word to lowercase to make the function case-insensitive
  word = word.toLowerCase();
  
  // Define two pointers that will compare characters from both ends of the word
  let left = 0;
  let right = word.length - 1;

  // Continue checking characters until the pointers cross each other
  while (left < right) {
    // If the characters at both pointers are not equal, return false
    if (word[left] !== word[right]) {
      return false;
    }
    
    // Move the pointers towards the middle of the word
    left++;
    right--;
  }

  // If the function has not returned false, the word is a palindrome
  return true;
}

/*
Pseudocode:
1. Convert the word to lowercase
2. Define two pointers (left and right) to compare characters from both ends of the word
3. While the left pointer is less than the right pointer, do the following:
  a. If the characters at the left and right pointers are not equal, return false
  b. Move the left pointer one position to the right
  c. Move the right pointer one position to the left
4. If the function has not returned false, the word is a palindrome, so return true
*/

/*
Explanation:
The isPalindrome function checks whether a given word is a palindrome, which means that it reads the same backward as forward. To accomplish this, the function uses two pointers, one starting at the beginning of the word and the other at the end. The function compares the characters at these two pointers and moves them towards the middle of the word until they cross each other. If at any point the characters at the pointers are not equal, the function returns false. If the function has not returned false, the word is a palindrome, so it returns true.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

