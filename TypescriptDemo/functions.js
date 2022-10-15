"use strict";
function add(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
console.log(add(2, 3));
console.log(add(2, 3, 5));
const sub = (num1, num2, num3 = 10) => num1 - num2 - num3;
console.log(sub(2, 3));
console.log(sub(2, 3, 5));
const mult = function (num1, num2) {
    return num1 * num2;
};
console.log(mult(2, 3));
function add2(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((acc, num) => acc + num, 0);
}
console.log(add2(2, 3, 1, 2, 3, 4, 5));
function getItems(items) {
    return new Array().concat(items);
}
let concatResult = getItems([1, 2, 3, 4, 5]);
let concatString = getItems(['a', 'b', 'c', 'd', 'e']);
console.log(concatResult);
console.log(concatString);
