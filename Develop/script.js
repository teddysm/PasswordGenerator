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
  // let objectCheck = {
  //   lower: true,
  //   capital: true,
  //   special: true,
  //   nums: true
  // };

  let passwordChar = [];
  let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 
                  'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let alphabetUpper = [];
  let nums = [];
  let specialChar = [' ','!','"','#','$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<',
                     '=','>','?','@','[','\\',']','^','_','`','{','|','}','~',']',';'];
  
  let passwordLength = 0;
  let password = [];
  // let passwordString = "";

  passwordLength = prompt("Choose a password length (8 to 128)");
  if (!passwordLength) return "No Password";

  passwordLength = parseInt(passwordLength);

  if (!passwordLength){
    alert("Please enter a valid number!");
    return generatePassword();
  }
  if ((passwordLength < 8) || (passwordLength > 128)){
    alert("Wrong length input. Please try again. ")
    return generatePassword();
  }


  let lowerCaseCheck = confirm("Do you want lowercase letters in your password? \n(OK for YES, Cancel for NO)");
  let upperCaseCheck = confirm("Do you want uppercase letters in your password? \n(OK for YES, Cancel for NO)");
  let numCheck = confirm("Do you want numeric characters in your password? \n(OK for YES, Cancel for NO)");
  let specialCharCheck = confirm("Do you want special characters in your password? \n(OK for YES, Cancel for NO)");

  for (let x in alphabet){
    alphabetUpper.push(alphabet[x].toUpperCase());
  }
  for(let i = 0; i < 10; i++){
    nums.push(i);
  }
  
  if (lowerCaseCheck){
    passwordChar.push(alphabet);
  }
  if (upperCaseCheck){
    passwordChar.push(alphabetUpper);
  }
  if(numCheck){
    passwordChar.push(nums);
  }
  if (specialCharCheck){
    passwordChar.push(specialChar);
  }

  
  for (let i = 0; i < passwordLength; i++){
    let randomType = Math.floor(Math.random() * passwordChar.length);
    console.log(randomType);
    let randomChar = passwordChar[randomType][Math.floor(Math.random()* passwordChar[randomType].length)];
    password.push(randomChar);
  }

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