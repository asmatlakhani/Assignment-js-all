  
 //01
 // var number = 5;
 // var result = (number + 10) * 5;
 // document.write(result);

 //02
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// document.write(result);

 //03
//  var name = prompt("Please enter your name:");
// document.write("Hello, " + name + "! Welcome to our website.");

//4
//05
// var num = prompt("Please enter a number:");
// if (num === null || num === "") {
//   num = 5;
// }
// document.write("<h2>Multiplication Table of " + num + "</h2>");
// for (var i = 1; i <= 10; i++) {
//   document.write(num + " x " + i + " = " + (num * i) + "<br>");
// }


//06
let subject1 = prompt("Please enter the name of the first subject:");
let subject2 = prompt("Please enter the name of the second subject:");
let subject3 = prompt("Please enter the name of the third subject:");
let totalMarks = 100;
let marks1 = parseInt(prompt("Please enter the obtained marks for " + subject1 + ":"));

document.write("<h2>Subject-wise Results</h2>");
document.write(subject1 + ": " + marks1 + " out of " + totalMarks + "<br>");
document.write(subject2 + ": " + "<br>");
document.write(subject3 + ": " + "<br>");


//07
subject1 = input("Please enter the name of the first subject: ")
subject2 = input("Please enter the name of the second subject: ")
subject3 = input("Please enter the name of the third subject: ")
totalMarks = 100
marks1 = int(input("Please enter the obtained marks for " + subject1 + ": "))
marks2 = int(input("Please enter the obtained marks for " + subject2 + ": "))
marks3 = int(input("Please enter the obtained marks for " + subject3 + ": "))
totalObtainedMarks = marks1 + marks2 + marks3
percentage = (totalObtainedMarks / (3 * totalMarks)) * 100
print("<table>")
print("  <tr>")
print("    <th>Subject</th>")
print("    <th>Obtained Marks</th>")
print("    <th>Total Marks</th>")
print("  </tr>")
print("  <tr>")
print("    <td>" + subject1 + "</td>")
print("    <td>" + str(marks1) + "</td>")
print("    <td>" + str(totalMarks) + "</td>")
print("  </tr>")
print("  <tr>")
print("    <td>" + subject2 + "</td>")
print("    <td>" + str(marks2) + "</td>")
print("    <td>" + str(totalMarks) + "</td>")
print("  </tr>")
print("  <tr>")
print("    <td>" + subject3 + "</td>")
print("    <td>" + str(marks3) + "</td>")
print("    <td>" + str(totalMarks) + "</td>")
print("  </tr>")
print("</table>")
print("<br>")
print("Total Obtained Marks: " + str(totalObtainedMarks))
print("<br>")
print("Total Marks: " + str(3 * totalMarks))
print("<br>")
print("Percentage: " + str(percentage) + "%")