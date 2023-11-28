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

// prompt variables
let passLength = 0;
let typeLower = "";
let typeUpper = "";
let typeNumeric = "";
let typeSpecial = "";

// Function to prompt user for password options
function getPasswordOptions() {
  const selections = [];

  passLength = Number(
    prompt(
      "How long would you like your password to be? (between 8 & 128 characters)"
    )
  );

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
  typeLower = confirm(
    "Would you like lower case characters in your password? (Press OK for yes and Cancel for no)"
  );

  if (typeLower) {
    typeLower === true;
    selections.push(typeLower);
  } else {
    typeLower === false;
  }

  //Ask the user if they would like upper case characters in their password
  typeUpper = confirm(
    "Would you like upper case characters in your password? (Press OK for yes and Cancel for no)"
  );

  if (typeUpper) {
    typeUpper === true;
    selections.push(typeUpper);
  } else {
    typeUpper === false;
  }

  //Ask the user if they would like numbers in their password
  typeNumeric = confirm(
    "Would you like numbers in your password? (Press OK for yes and Cancel for no)"
  );

  if (typeNumeric) {
    typeNumeric === true;
    selections.push(typeNumeric);
  } else {
    typeNumeric === false;
  }

  //Ask the user if they would like numbers in their password
  const typeSpecial = confirm(
    "Would you like special characters in your password? (Press OK for yes and Cancel for no)"
  );

  if (typeSpecial) {
    typeSpecial === true;
    selections.push(typeSpecial);
  } else {
    typeSpecial === false;
  }

  if (selections.length === 0) {
    console.log("You must select at least one character type!!!");
    return;
  }
  generatePassword(passLength, typeLower, typeUpper, typeNumeric, typeSpecial);
}

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.trunc(Math.random() * arr.length)];
}

// Function to generate password with user input
function generatePassword(
  length,
  typeLower,
  typeUpper,
  typeNumeric,
  typeSpecial
) {
  const characterSets = [];
  // Check to see which of the users variables to use
  if (typeLower) {
    characterSets.push(lowerCasedCharacters);
  }
  if (typeUpper) {
    characterSets.push(upperCasedCharacters);
  }
  if (typeNumeric) {
    characterSets.push(numericCharacters);
  }
  if (typeSpecial) {
    characterSets.push(specialCharacters);
  }

  let result = "";
  let counter = 0;

  while (result.length < length) {
    if (counter === characterSets.length) counter = 0;

    const randomChar = getRandom(characterSets[counter]);
    result += randomChar;
    counter++;
  }

  // Remove the extra password to the specified length
  result = result.slice(0, length);
  console.log(result);
  return result;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var passwordText = document.querySelector("#password");

  var password = generatePassword(
    passLength,
    typeLower,
    typeUpper,
    typeNumeric,
    typeSpecial
  );
  console.log(password);
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", getPasswordOptions, writePassword);
