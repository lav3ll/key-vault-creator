// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Function to prompt user for password options
function getPasswordOptions() {
  const passLength = Number(
    prompt(
      "How long would you like your password to be? (between 8 & 128 characters)"
    )
  );

  // const typeSpecial = prompt(
  //   "Would you like special characters in your password?"
  // );

  //Ask the user how long they would like their password to be
  if (passLength === null || passLength === undefined || passLength === "") {
    console.log("You have not entered a value. Please enter a value");
  } else if (isNaN(passLength)) {
    console.log("You have entered a non-numeric value. Please input a number");
    return;
  } else if (passLength < 8 || passLength > 128) {
    console.log(
      "Please pick a password length inside the range of 8 to 128 characters"
    );
    return;
  }

  //Ask the user if they would like lower case characters in their password
  const typeLower = confirm(
    "Would you like lower case characters in your password? (Press OK for yes and Cancel for no)"
  );

  if (typeLower) {
    // Use lowercase characters in the password
  } else {
    // Do not use lowercase characters in the password
  }

  //Ask the user if they would like upper case characters in their password
  const typeUpper = confirm(
    "Would you like upper case characters in your password? (Press OK for yes and Cancel for no)"
  );

  if (typeUpper) {
    // Use uppercase characters in the password
  } else {
    // Do not use uppercase characters in the password
  }

  //Ask the user if they would like numbers in their password
  const typeNumeric = confirm(
    "Would you like numbers in your password? (Press OK for yes and Cancel for no)"
  );

  if (typeNumeric) {
    // Use numbers in the password
  } else {
    // Do not use numbers in the password
  }
}

// Function for getting a random element from an array
function getRandom(arr) {}

// Function to generate password with user input
function generatePassword() {}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", getPasswordOptions, writePassword);
