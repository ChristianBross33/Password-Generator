// Assignment code here
var generateBtn = document.querySelector("#generate");

//set variables for character password choices
var lowerC = 'abcdefghijklmnopqrstuvwxyz';
var upperC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numC = '0123456789';
var specialC = '~!@#$%^&*()_+=';

function generatePassword() {
  console.log("Hey! You clicked the button!")



  return "Generated password will go here!";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);