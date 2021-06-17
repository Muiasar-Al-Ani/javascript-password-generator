// Assignment Code
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  const passwordText = document.querySelector("#password");
  passwordText.value = password;

  // Create password and show it in the text area
  function generatePassword() {
    // Declaring the string variables that will make our pasword
    const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*_-+=";

    // Declaring variables for the character choises
    let includeUpperCaseLetters;
    let includelowerCaseLetters;
    let includeNumbers;
    let includeSymbols;

    // Prompt for the length of the password
    const length = parseInt(
      prompt(
        "Please enter the length of the password needed? between 8 and 128 charachters!"
      )
    );

    // Validate if the user has entered the length needed
    if (!length) {
      alert("This password generater needs a number to be entered!");

      // Validate if the user has entered less than 8 or more than 128 characters for the length
    } else if (length < 8 || length > 128) {
      length = parseInt(
        prompt("You must choose between 8 and 128 characters!")
      );
    } else {
      // Continues once user input is validated
      includeUpperCaseLetters = confirm("Include Upper Case Letters?");
      includelowerCaseLetters = confirm("Include Lower Case Letters?");
      includeNumbers = confirm("Include Number?");
      includeSymbols = confirm("Include Symbols?");
    }

    // Validate if the user didn't choose any type of character
    if (
      !includeUpperCaseLetters &&
      !includelowerCaseLetters &&
      !includeNumbers &&
      !includeSymbols
    ) {
      alert("You must choose at least one type of characters!");
    }

    // Check what characters to add to the characters string
    let characters = "";
    includeUpperCaseLetters ? (characters += upperCaseLetters) : "";
    includelowerCaseLetters ? (characters += lowerCaseLetters) : "";
    includeNumbers ? (characters += numbers) : "";
    includeSymbols ? (characters += symbols) : "";

    // Generate and return a random password from the characters string
    let password = "";
    for (let i = 0; i < length; i++) {
      password += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
