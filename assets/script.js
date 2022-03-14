// Assignment code here
var generateBtn = document.querySelector("#generate");

//set variables for character password choices
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var special = ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'
];


// added function to ask user which options
function questionPrompts(){
  var isValid = false;
  do {
    var passwordLength = prompt("How many characters would you like your password to be? Your password must be between 8-128 characters long.");
    var numbersChoice = confirm("A good password needs numbers. Do you want to add some?");
    var lowercaseChoice = confirm("Do you want your password to include lower case letters?");
    var uppercaseChoice = confirm("Do you want your password to include upper case letters?");
    var specialChoice = confirm("You have a good password, but good ones have special characters. Want to add that too?");
    var responses = {
      length: passwordLength,
      numbersChoice: numbersChoice,
      lowercaseChoice: lowercaseChoice,
      uppercaseChoice: uppercaseChoice,
      specialChoice: specialChoice
    } 
    if((length < 8)||(length > 128))
    alert("Choose number between 8 and 128");
    else if((!askNumbers)&&(!askLowerCase)&&(!askUpperCase)&&(!askSpecial))
    alert("Must choose at least one type.");
    else
    isValid = true;

  } while(!isValid);
  return responses;
}

// Joining everything together and generating final result for password.
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
