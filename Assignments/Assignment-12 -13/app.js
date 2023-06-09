//01
// var input = prompt("Enter a character (number or string): ");
// var asciiCode = input.charCodeAt(0);
// if (asciiCode >= 48 && asciiCode <= 57) {
//   alert(input + " is a number");
// } else if (asciiCode >= 65 && asciiCode <= 90) {
//   alert(input + " is an uppercase letter");
// } else if (asciiCode >= 97 && asciiCode <= 122) {
//   alert(input + " is a lowercase letter");
// } else {
//   alert(input + " is not a valid input");
// }


//02
// var firstNumber = parseInt(prompt("Enter the first integer: "));
// var secondNumber = parseInt(prompt("Enter the second integer: "));
// if (firstNumber > secondNumber) {
//   alert(firstNumber + " is larger");
// } else if (secondNumber > firstNumber) {
//   alert(secondNumber + " is larger");
// } else {
//   alert("Both numbers are equal");
// }

//03
// var number = parseInt(prompt("Enter a number: "));
// if (number > 0) {
//   alert(number + " is positive");
// } else if (number < 0) {
//   alert(number + " is negative");
// } else {
//   alert("The number is zero");
// }


//04
// var character = prompt("Enter a character (string of length 1): ");
// var isVowel = false;

// if (character === "a" || character === "e" || character === "i" || character === "o" || character === "u" || character === "A" || character === "E" || character === "I" || character === "O" || character === "U") {
//   isVowel = true;
// }
// if (isVowel) {
//   alert(character + " is a vowel");
// } else {
//   alert(character + " is not a vowel");
// }



//05
// var correctPassword = "mypassword";
// var userPassword = prompt("Enter your password: ");
// if (userPassword === "") {
//   alert("Please enter your password");
// } else if (userPassword === correctPassword) {
//   alert("Correct! The password you entered matches the original password");
// } else {
//   alert("Incorrect password");
// }


//06
// var greeting;
// var hour = 13;
// if (hour < 18) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }

//07
// var time24 = parseInt(prompt("Enter time in 24-hour clock format (e.g. 1900 for 7pm): "));
// var time12;

// if (time24 >= 0 && time24 < 1200) {
//   time12 = time24 + "am";
// } else if (time24 >= 1200 && time24 < 1300) {
//   time12 = "12pm";
// } else if (time24 >= 1300 && time24 < 2400) {
//   time12 = (time24 - 1200) + "pm";
// } else {
//   alert("Invalid input");
// }
// if (time12 !== undefined) {
//   alert("The time in 12-hour clock format is " + time12);
// }