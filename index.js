function isPalindrome(word) {
  // Write your algorithm here
  const backWord = []
  for (let i = word.length - 1; i >= 0; i--) {
    backWord.push(word[i])
  }
  
  if (backWord.join("") === word) {
    return true
  } else {
    return false
  }
}


/* 
  Pseudocode
  - make an variable given backword word using for loop reverse
  - chech if word and backword word are same 
    if they are same return true
    if not the same return false 
*/

/*
  explanation of solution:
  - simply just make a for loop and push to an array from last letter to first one 
  - join that backword array to make it as a word 
  - compare word with the backword I made 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("anna"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("sam"));
}

module.exports = isPalindrome;
