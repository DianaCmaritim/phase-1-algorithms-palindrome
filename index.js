function isPalindrome(string) {
  // Write your algorithm here

  const length = string.length;

  for (let i = 0; i < length / 2; i++){

  if (string[i] !== string[string.length-1-i]){
    return false;
  }
  }return true;
  }
    console.log("abba")



  //Add your pseudocode here
/*find the length of the string

iterate through half of the string using for loop

use the if condition if the first half and
last half of the string characters are the same

return false if string does meet  condition
else return true
*/

 //Add written explanation of your solution here
/*The length of the string is calculating using the
length property that is assigned a variable const

The for loop checks if the first and the last successive characters
of the string are similar.Loop continues till half of the string
*/



// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log('Expecing: true');
  console.log("=>", isPalindrome("abba"))
}

module.exports = isPalindrome;
