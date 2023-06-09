//01
var multiArray = [[]];
multiArray.push([]);
multiArray.push([]);

multiArray[0].push(1);
multiArray[0].push(2);
multiArray[1].push(3);
multiArray[1].push(4);
multiArray[2].push(5);
multiArray[2].push(6);

console.log(multiArray);


//02
var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  console.log(matrix);


  //03
for (var i = 1; i <= 10; i++) {
    console.log(i);
  }

  //04
var tableNum = parseInt(prompt("Enter the number for the multiplication table:"));
var tableLength = parseInt(prompt("Enter the length of the multiplication table:"));
for (var i = 1; i <= tableLength; i++) {
  console.log(`${tableNum} x ${i} = ${tableNum * i}`);
}

//05
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (var i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}


//06
document.write("<h3>Counting:</h3>");
for (var i = 1; i <= 15; i++) {
  document.write(`${i}, `);
}

document.write("<h3>Reverse counting:</h3>");
for (var i = 10; i >= 1; i--) {
  document.write(`${i}, `);
}
document.write("<h3>Even:</h3>");
for (var i = 0; i <= 20; i += 2) {
  document.write(`${i}, `);
}

document.write("<h3>Odd:</h3>");
for (var i = 1; i <= 19; i += 2) {
  document.write(`${i}, `);
}

document.write("<h3>Series:</h3>");
for (var i = 1; i <= 10; i++) {
  document.write(`${i*2}k, `);
}


//07
var items = ["cake", "apple pie", "cookie", "chips", "patties"];

var searchItem = prompt("Enter an item to search for:");

var found = false;
for (var i = 0; i < items.length; i++) {
  if (items[i] === searchItem) {
    found = true;
    break;
  }
}

if (found) {
  alert(`${searchItem} is found in the list at index ${items.indexOf(searchItem)}.`);
} else {
  alert(`${searchItem} is not found in the list.`);
}


//08
var numbers = [24, 53, 78, 91, 12];
var largest = numbers[0];
for (var i = 1; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i];
  }
}
console.log(`The largest number in the array is: ${largest}`);


//09
var numbers = [24, 53, 78, 91, 12];
var smallest = numbers[0];
for (var i = 1; i < numbers.length; i++) {
  if (numbers[i] < smallest) {
    smallest = numbers[i];
  }
}
console.log(`The smallest number in the array is: ${smallest}`);


//10
for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
      console.log(i);
    }
  }