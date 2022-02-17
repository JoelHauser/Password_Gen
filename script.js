// Assignment Code
var generateBtn = document.querySelector("#generate");

//array for lower
//array for caps
//array for special
//numaric

const lowercase = [122, 97],
  uppercase = [90, 65],
  numaric = [57, 48],
  special = [47, 33];

function generatePassword() {
  var passwordLength = 0;
  var CharacterTypes = [
    ["lowercase", lowercase],
    ["uppercase", uppercase],
    ["numaric", numaric],
    ["special", special],
  ];
  var password = "";

  while (passwordLength > 128 || passwordLength < 8) {
    passwordLength = window.prompt(
      "Please enter the desired length of password (8-128): "
    );
  }
  for (let i = 0; i < CharacterTypes.length; i++) {
    var choice = window.prompt(
      "Would you like to include " + CharacterTypes[i][0] + " characters? (Y/N)"
    );
    if (choice.toLowerCase() == "n") {
      CharacterTypes.splice(i, 1);
    }
  }

  for (let i = 0; i < passwordLength; i++) {
    var current =
      CharacterTypes[Math.round(Math.random() * (CharacterTypes.length - 1))];
    var min = current[1][1];
    var max = current[1][0];

    password += String.fromCharCode(
      Math.floor(Math.random() * (max - min) + min)
    );
  }

  return password;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
