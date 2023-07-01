// Assignment code here



var upperChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var specialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', ']', '{', '}'];
var numbers =['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  
  // ask the user how long the password should be
  var pLength = prompt('how long should your password be?')
  // the password cannot be under 8 characters and over 128 characters
  if (pLength < 8 || pLength > 128){
    alert('Wrong Password Length, must be between 8 - 128 characters.');
    return;
  }
  // ask the user what characters they want. 4 questions. 
  var upperQues = confirm("Would you like uppercase characters?");
  var lowerQues = confirm("Would you like lowercase characters?");
  var specQues = confirm("would you like special characters?");
  var numQues = confirm("Would you like numbers included?")
  // the user must select at least one character option
if (upperQues === false && lowerQues == false && specQues === false && numQues === false) {
  alert("You must Select a password crieteria");
  return;
}

var allChars = []
  // once all questions are answered generate randomized password. 
if (upperQues === true){
 allChars = allChars.concat(upperChars);
}
if (lowerQues === true){
 allChars = allChars.concat(lowerChars);
}
if (specQues === true) {
  allChars = allChars.concat(specialChars);
}
if (numQues === true) {
  allChars = allChars.concat(numbers);
}

// randomize allChars in a for loop and add 1 character to the final password string it together
var finalPW = []

for (var i = 0; i < pLength; i++){
  // randomize the allChars and pass 1 character to the finalPW
  var randomChar = allChars[Math.floor(Math.random() * allChars.length)]
  finalPW.push (randomChar);
}
 

  return finalPW.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






