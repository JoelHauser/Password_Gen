// Assignment Code
var generateBtn = document.querySelector("#generate");

//array for lower
//array for caps
//array for special
//numaric

const lowercaseCharacters = "aabcdefghijklmnopqrstuvwxyz",
      uppercaseCharacters = "aABCDEFGHIJKLMNOPQRSTUVWXYZ",
      numericCharacters = "a0123456789",
      specialCharacters = "a!@#$%^&*()-=_+`~<>?,./;':{}[]\"|"

function generatePassword(){
  var passwordLength = 0;
  var password = "";
  var charsToInclude = "";
  var charTypes = ["lowercase","uppercase","numeric","special"];
  var promptComplete = false;

  while(passwordLength > 128 || passwordLength < 8){
    passwordLength = window.prompt("Please enter the desired length of your password (8-128): ");
  }
  for(let i = 0; i < charTypes.length; i++){
    var choice = window.prompt("Would you like to include " + charTypes[i] + " characters? (Y/N)");
    if(i == 0 && choice === "y"){
      charsToInclude += lowercaseCharacters;
    } else if (i == 1 && choice === "y"){
      charsToInclude += uppercaseCharacters;
    } else if (i == 2 && choice === "y"){
      charsToInclude += numericCharacters;
    } else if (i == 3 && choice === "y"){
      charsToInclude += specialCharacters;
    }
  }

  console.log(charsToInclude);
  for(let i = 0; i < passwordLength; i++){

    password += charsToInclude.charAt(Math.floor(Math.random() * (charsToInclude.length - 1)));
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
