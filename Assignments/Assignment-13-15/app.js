//01
var studentNames = [];

//02
var studentNames = { length: 0 };

//03
console.log(fruits.length); 

//04
console.log(numbers.length); 

//05
console.log(bools.length); 

//06
console.log(mixed.length); 

//07
console.log(items[0].name); 
console.log(items[1]['available']);


//08
var studentNames = ['Alice', 'Bob', 'Charlie'];
var studentScores = [420, 380, 460];

for (var i = 0; i < studentNames.length; i++) {
  var percentage = (studentScores[i] / 500) * 100;
  console.log(`${studentNames[i]} scored ${studentScores[i]} out of 500, which is ${percentage}%.`);
}


//09
let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

document.write(`Original Array: ${colors} <br><br>`);

let newColorStart = prompt('Enter a color to add to the beginning of the array:');

colors.unshift(newColorStart);

document.write(`Array with new color added to the beginning: ${colors} <br><br>`);

var newColorEnd = prompt('Enter a color to add to the end of the array:');

colors.push(newColorEnd);

document.write(`Array with new color added to the end: ${colors} <br><br>`);

colors.unshift('pink', 'brown');

document.write(`Array with two more colors added to the beginning: ${colors} <br><br>`);

colors.shift();

document.write(`Array with first color deleted: ${colors}`);


//10
var scores = [90, 85, 95, 80, 92];
scores.sort(function(a, b) {
  return a - b;
});
console.log(scores);


//11
var cities = ['New York', 'London', 'Paris', 'Tokyo', 'Sydney'];
var selectedCities = cities.slice(1, 4);
console.log(selectedCities);


//12
var arr = ['This', 'is', 'my', 'cat'];
var str = arr.join(' ');
console.log(str);


//13
var queue = [];
queue.push('apple');
queue.push('banana');
queue.push('cherry');

var first = queue.shift();
console.log(first);

var second = queue.shift();
console.log(second);

var third = queue.shift();
console.log(third);


//14
var stack = [];
stack.push('apple');
stack.push('banana');
stack.push('cherry');

var last = stack.pop();

console.log(last); 

var secondLast = stack.pop();
console.log(secondLast);

var thirdLast = stack.pop();
console.log(thirdLast);


//15
var manufacturers = ['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony', 'Haier'];
var selectMenu = '<select>';
for (var i = 0; i < manufacturers.length; i++) {
  selectMenu += `<option>${manufacturers[i]}</option>`;
}

selectMenu += '</select>';
document.write(selectMenu);




