// Assignment code here

// function generateString(length) {
//     let result = ' ';
//     var charactersLength = characters.length;
//     for ( let i = 0 ; i < length ; i ++) {
//         result += characters.charAt(Math.floor(Math.random() * charactersLength));

//     }
//     return result;
// }
// console.log(generateString(7));


//what do we need to do?
  //have the button click
  //be prompted for criteria after click !!!
    //first prompt is length
    //second prompt is character type
      //input shpuld be all character types
  //input must be valid, and one character critera should be selected !!!
  //after prompts, password is generated based on critera !!!
  //password should be displayed in alert or textarea !!!

//what values do we track
  //user input !!!
    //defined in prompt
  //characters
    //upper and lower
    //special characters
    //numbers
  //password length !!!
  //criteria selected !!!





var upperChars = [['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']];
var lowerChars = [['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']]
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', ']', '{', '}'];
var numbers =['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  // var password = 
  generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// writePassword(); {
// var userPasswordPrmpt = prompt("How would you like to style your password?");
// }


function generatePassword() {
  alert("Welcome! Please answer crieteria to Generate Password");
  prompt("Would you like upper case characters?");

    console.log(upperChars.sort(function() { return 0.5 - Math.floor(Math.random())}));
}

