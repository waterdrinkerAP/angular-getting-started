let lname: string;
lname = 'Nasko';
let newname = lname.toUpperCase();
console.log(newname);

let age: number;
age = 25;
age = 25.5;

let dob = '25';
let result = parseInt(dob);

let isValid: boolean = false;
console.log(isValid);

let empList: string[];
let depList: Array<string>;
empList = ['One', 'Two', 'Three'];

let numList: Array<number>;
numList = [1, 2, 3, 4, 5];
let newNum = numList[0];
let results = numList.filter((num) => num > 2);
let num = numList.find((num) => num === 2);
let sum = numList.reduce((acc, num) => acc + num);

console.log(results, num, sum);

const enum Color {
    Red,
    Green,
    Blue
}
let c = Color.Blue;

let swapNumbs: [number, number]; // This tuple must have exactly two numbers

function swapNumbers(num1: number, num2: number): [number, number] {
    return [num2, num1];
}

swapNumbs = swapNumbers(10, 20);
console.log(swapNumbs[0]);

let department;

department = 'IT';
department = 10;


let mat: number[][] = [[1, 2, 3], [4, 5, 6]];
