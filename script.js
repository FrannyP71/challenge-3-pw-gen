// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = "0123456789"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowercase = "abcdefghijklmnopqrstuv"
var special = "!@#$%^&*"
//

function generatePassword() {
  var pwLength = window.prompt("Enter length between 8 and 128");
  console.log(pwLength) 

//check if imput is legal and return if not, window.alert, return ""
//look up random number generator with a for loop

  var askLower = window.confirm("Do you want to use lowercase?");
  var askUpper = window.confirm("Do you want to use uppercase?");
  var askNumeric = window.confirm("Do you want to use numeric?");
  var askSpecial = window.confirm("Do you want to use special?"); 

  var selectedChars = ""

  var pwText = ""
//evaluate prompt answers

  if (askNumeric) {
    selectedChars = selectedChars + numbers
  }

  return pwText
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
