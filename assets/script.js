// Assignment code here
var generateBtn = document.querySelector("#generate");

//set variables for character password choices
var lowerC = 'abcdefghijklmnopqrstuvwxyz';
var upperC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numC = '0123456789';
var specialC = '~!@#$%^&*()_+=';

// added function to ask user which options
function questionPrompts(){
  var isValid = false;
  do {
    var passwordLength = prompt("How many characters would you like your password to be? Your password must be between 8-128 characters long.");
    var numbersChoice = confirm("A good password needs some numbers. Want to add some?");
    var lowercaseChoice = confirm("How about some lowercase letters?");
    var uppercaseChoice = confirm("What about some uppercase letters?");
    var specialChoice = confirm("You have a good password, but great one has special characters. Want to add that too?");
    var responses = {
      length: passwordLength,
      numbersChoice: numbersChoice,
      lowercaseChoice: lowercaseChoice,
      uppercaseChoice: uppercaseChoice,
      specialChoice: specialChoice
    }
    
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
