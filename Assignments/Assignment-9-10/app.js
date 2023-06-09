//01
// var city = prompt("Please enter the name of a city:");
// if (city.toLowerCase() === "karachi") {
//   document.write("Welcome to city of lights");
// }

//02
// gender = input("Please enter your gender (male or female): ");

// if gender == "male":
//     print("Good Morning Sir.");
// elif gender == "female":
//     print("Good Morning Ma'am.");
// else:
//     print("Invalid gender. Please enter 'male' or 'female'.");
  

//03
// color = input("Please enter the color of the traffic signal: ")

// if color == "red":
//     print("Stop!")
// elif color == "yellow":
//     print("Slow down.")
// elif color == "green":
//     print("Go!")
// else:
//      print("Invalid color. Please enter 'red', 'yellow', or 'green'.")

//04
// fuel = float(input("Please enter the remaining fuel in your car (in litres): "))

// if fuel < 0.25:
//     print("Please refill the fuel in your car.")
// else:
//     print("You have enough fuel.")

//05
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }


//06
// var subject1 = parseInt(prompt("Enter marks obtained in subject 1: "));
// var subject2 = parseInt(prompt("Enter marks obtained in subject 2: "));
// var subject3 = parseInt(prompt("Enter marks obtained in subject 3: "));
// var totalMarks = parseInt(prompt("Enter total marks: "));

// // Calculate percentage
// var obtainedMarks = subject1 + subject2 + subject3;
// var percentage = obtainedMarks / totalMarks * 100;

// // Determine grade based on percentage
// var grade;

// if (percentage >= 80) {
//   grade = "A+";
// } else if (percentage >= 70) {
//   grade = "A";
// } else if (percentage >= 60) {
//   grade = "B";
// } else if (percentage >= 50) {
//   grade = "C";
// } else {
//   grade = "Fail";
// }
// document.write("Obtained Marks: " + obtainedMarks + "<br>");
// document.write("Total Marks: " + totalMarks + "<br>");
// document.write("Percentage: " + percentage.toFixed(2) + "%<br>");
// document.write("Grade: " + grade);


//07
// var secretNumber = Math.floor(Math.random() * 10) + 1;
// var guess = parseInt(prompt("Guess the secret number (between 1 and 10): "));
// if (guess === secretNumber) {
//   alert("Bingo! Correct answer");
// } else if (guess === secretNumber + 1 || guess === secretNumber - 1) {
//   alert("Close enough to the correct answer");
// } else {
//   alert("Sorry, try again");
// }


//08
// var number = parseInt(prompt("Enter a number: "));
// if (number % 3 === 0) {
//   alert(number + " is divisible by 3");
// } else {
//   alert(number + " is not divisible by 3");
// }


//09
// var number = parseInt(prompt("Enter a number: "));
// if (number % 2 === 0) {
//   alert(number + " is an even number");
// } else {
//   alert(number + " is an odd number");
// }


//10
// var temperature = parseInt(prompt("Enter temperature in Celsius: "));
// if (temperature > 40) {
//   alert("It is too hot outside.");
// } else if (temperature > 30) {
//   alert("The Weather today is Normal.");
// } else if (temperature > 20) {
//   alert("Today's Weather is cool.");
// } else if (temperature > 10) {
//   alert("OMG! Today's weather is so Cool.");
// } else {
//   alert("Stay indoors - it's freezing outside!");
// }


//11
// var firstNumber = parseInt(prompt("Enter the first number: "));
// var secondNumber = parseInt(prompt("Enter the second number: "));
// var operation = prompt("Enter an operation (+, -, *, /, %): ");
// var result;

// if (operation === "+") {
//   result = firstNumber + secondNumber;
// } else if (operation === "-") {
//   result = firstNumber - secondNumber;
// } else if (operation === "*") {
//   result = firstNumber * secondNumber;
// } else if (operation === "/") {
//   result = firstNumber / secondNumber;
// } else if (operation === "%") {
//   result = firstNumber % secondNumber;
// } else {
//   alert("Invalid operation entered");
// }

// // Display result to user
// if (result !== undefined) {
//   alert("Result: " + result);
// }