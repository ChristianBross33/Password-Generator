# Password Generator Starter Code

# User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## Whats been done
- originally added psuedo code to start my project
- built multiple arrays for possible characters
- built a function to ask user which options they would like for their password
- added conditional statements to make sure their choices met the bare minimum
- built a generate password function that pulls the responses made by the users and uses possible characters to build them a password


## Screenshot 

![Password-Generator](assets/images/Screenshot%202022-03-16%20163919.png)

Published at: https://christianbross33.github.io/Password-Generator/
Repository: https://github.com/ChristianBross33/Password-Generator