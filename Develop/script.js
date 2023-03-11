// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  //initialize arrays to hold the generated password and the available character types
  let passwordChar = [];
  let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 
                  'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let alphabetUpper = [];
  let nums = [];
  let specialChar = [' ','!','"','#','$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<',
                     '=','>','?','@','[','\\',']','^','_','`','{','|','}','~',']',';'];
  
  let passwordLength;
  let password = [];

  //ask user for the length of the password
  passwordLength = prompt("Choose a password length (8 to 128)");

  // return "No password" if user cancels
  if (!passwordLength) return "No Password";

  // convert user's input to a number
  passwordLength = parseInt(passwordLength); 
  
  // if user enter words, throw an alert and start over
  if (!passwordLength){
    alert("Please enter a valid number!");
    return generatePassword();
  }

  // check to see if the length input fits the requirement
  if ((passwordLength < 8) || (passwordLength > 128)){
    alert("Wrong length input. Please try again. ")
    return generatePassword();
  }

  // Check to see which of the 4 types of character user wants in password
  // Their chosen type will be added to the passwordChar array containing all possible characters
  if(confirm("Do you want lowercase letters in your password? \n(OK for YES, Cancel for NO)")) {
    passwordChar.push(alphabet);
  } else{
    window.alert("No lowercase letters will be a part of your password.")
  }

  if(confirm("Do you want uppercase letters in your password? \n(OK for YES, Cancel for NO)")) {
    for (let x in alphabet){
      alphabetUpper.push(alphabet[x].toUpperCase());
    }
    passwordChar.push(alphabetUpper);
  } else{
    window.alert("No uppercase case letters will be a part of your password.")
  }

  if(confirm("Do you want numeric characters in your password? \n(OK for YES, Cancel for NO)")) {
    for(let i = 0; i < 10; i++){
      nums.push(i);
    }
    passwordChar.push(nums);
  } else{
    window.alert("No numeric characters will be a part of your password.")
  }

  if(confirm("Do you want special characters in your password? \n(OK for YES, Cancel for NO)")) {
    passwordChar.push(specialChar);
  } else{
    window.alert("No special characters will be apart of your password.")
  }

  // if user didnt choose a type, throw an alert and exit the function, returns "No password"
  if (passwordChar.length === 0){
    alert("No password can be generated because no character types was chosen.");
    return "No password";
  }
  
  // randomly choose 1 type and 1 character of that type through each iteration of for loop 
  // run for loop as many times as the password length
  // add that randomly generated character to an array
  for (let i = 0; i < passwordLength; i++){
    let randomType = Math.floor(Math.random() * passwordChar.length);
    let randomCharIndex = Math.floor(Math.random()* passwordChar[randomType].length);
    let randomChar = passwordChar[randomType][randomCharIndex];
    password.push(randomChar);
  }

  // return the generated password with no space in between
  return password.join('');
}

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page