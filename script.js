// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = "abcdefghijklmnopqrstuv"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "0123456789"
var special = "!@#$%^&*"

var selectedChars = ""

function getRandomIndex(arr = []) {
  console.log(arr)
  //look up random number generator with a for loop
  var randomChar = Math.floor(Math.random() * arr.length)
  
  return arr[randomChar]
}

function getPrompts() {
  var pwLength = window.prompt("Enter length between 8 and 128");
  console.log(pwLength);
  var askLower = window.confirm("Do you want to use lowercase?");
  var askUpper = window.confirm("Do you want to use uppercase?");
  var askNumeric = window.confirm("Do you want to use numeric?");
  var askSpecial = window.confirm("Do you want to use special?");
  //check if imput is legal and return if not, window.alert, return ""
  if (isNaN(pwLength) || pwLength < 8 || pwLength > 128) {
    window.alert("Password length has to between 8 - 128 characters. Please try again.");
    return false;
  }

  //evaluate prompt answers

  if (!askLower && !askUpper && !askNumeric && !askSpecial) {
    window.alert("Can not create password with no characters selected")
    return false;
  }

  var results = {
    pwLength,
    askNumeric, askLower, askUpper, askSpecial
  }

  return results
}

function generatePassword(params = getPrompts()) {
  console.log("generating pw...", params)
  var chars = []
  var results = []

  if (params.askLower){
    var toArray = lowercase.split("")
    var randomLower = getRandomIndex(toArray)
    // console.log (toArray, randomLower);
    results.push(randomLower)
    chars = chars.concat(toArray)
    console.log("results", results, "chars", chars);
  }

  if (params.askUpper){
    var toArray = uppercase.split("")
    var randomUpper = getRandomIndex(toArray)
    results.push(randomUpper)
    chars = chars.concat(toArray)
    console.log("results", results, "chars", chars);
  }

  if (params.askNumeric){
    var toArray = numbers.split("")
    var randomNumeric = getRandomIndex(toArray)
    results.push(randomNumeric)
    chars = chars.concat(toArray)
    console.log("results", results, "chars", chars);
  }

  if (params.askSpecial){
    var toArray = special.split("")
    var randomSpecial = getRandomIndex(toArray)
    results.push(randomSpecial)
    chars = chars.concat(toArray)
    console.log("results", results, "chars", chars);
  }
  // May need to change for Chars to pwLength

  console.log(params.pwLength)
for (let i = 0; i < chars.length; i++) {
  const element = chars[i];
  console.log(element)
}
  return results.join("")
}

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
