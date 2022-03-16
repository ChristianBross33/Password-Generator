// Assignment code here
var generateBtn = document.querySelector("#generate");

//set variables for character password choices
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var special = ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];


// added function to ask user which options
function questionPrompts(){
  var isValid = false;
  do {
    var length = prompt("How many characters would you like your password to be? Your password must be between 8-128 characters long.");
    var numbersChoice2 = confirm("A good password needs numbers. Do you want to add some?");
    var lowercaseChoice3 = confirm("Do you want your password to include lower case letters?");
    var uppercaseChoice4 = confirm("Do you want your password to include upper case letters?");
    var specialChoice5 = confirm("You have a good password, but good ones have special characters. Want to add that too?");
    var responses = {
      length: length,
      numbersChoice2: numbersChoice2,
      lowercaseChoice3: lowercaseChoice3,
      uppercaseChoice4: uppercaseChoice4,
      specialChoice5: specialChoice5
    } 

    if((length < 8)||(length > 128))
    alert("Choose number between 8 and 128");
    else if((!numbersChoice2)&&(!lowercaseChoice3)&&(!uppercaseChoice4)&&(!specialChoice5))
    alert("Must choose at least one type.");
    else
    isValid = true;

  } while(!isValid);
  return responses;
};

// Joining everything together and generating final result for password.
function generatePassword() {
  var passwordOptions = questionPrompts();
  var possibleCombo = [];
  var finalPassword = "";

  if (passwordOptions.numbersChoice2) {
    for (var i of numbers)
      possibleCombo.push(i);
  }
  if (passwordOptions.lowercaseChoice3) {
    for (var i of lowerCase)
      possibleCombo.push(i);
  }
  if (passwordOptions.uppercaseChoice4) {
    for (var i of upperCase)
      possibleCombo.push(i);
  }
  if (passwordOptions.specialChoice5) {
    for (var i of special)
      possibleCombo.push(i);
  }

  for (var i = 0; i < passwordOptions.length; i++) {
    finalPassword += possibleCombo[Math.floor(Math.random() * possibleCombo.length)];
  }

  return finalPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
