"use strict";
let lname;
lname = 'Nasko';
let newname = lname.toUpperCase();
console.log(newname);
let age;
age = 25;
age = 25.5;
let dob = '25';
let result = parseInt(dob);
let isValid = false;
console.log(isValid);
let empList;
let depList;
empList = ['One', 'Two', 'Three'];
let numList;
numList = [1, 2, 3, 4, 5];
let newNum = numList[0];
let results = numList.filter((num) => num > 2);
let num = numList.find((num) => num === 2);
let sum = numList.reduce((acc, num) => acc + num);
console.log(results, num, sum);
let c = 2 /* Color.Blue */;
let swapNumbs;
function swapNumbers(num1, num2) {
    return [num2, num2];
}
swapNumbs = swapNumbers(10, 20);
console.log(swapNumbs[0]);
