// I just wanted to play around with regex for a it in this file

const reLit: RegExp = /ab+c/gi; // Literals are evaluated at compile time
const reCon: RegExp = new RegExp(`ab+c`, 'gi'); // Evaluated at run time

console.log('ABbc'.match(reLit));
console.log('ABbc'.match(reCon));

const reJap: RegExp = /[ぁ-ゔゞァ-・ヽヾ゛゜一-龯]+/g; // Match Japanese words
const reBG: RegExp = /\p{sc=Cyrillic}+/gui; // Match Cyrillic words

console.log('一本気 鳥の歌'.match(reJap));
console.log('Имало едно време'.match(reBG));

const rePwd: RegExp = /(?=\w{5,})(?=\D*\d{2})/; // Test for 5 chars, 2 digits
console.log(rePwd.test('98pass99'));

const reUse: RegExp = /(\d{2}) \1 \1/;
console.log(reUse.test('42 42 42'));

const countUp: string = 'one two three';
const reSwap: RegExp = /(\w+) (\w+) (\w+)/; // Match 3 words
const replace: string = '$3 $2 $1'; // And swap their order
const countDown: string = countUp.replace(reSwap, replace);
console.log(countDown);

const wsHello = '   Hello, World!  ';
const reWS = /^\s*(.*\S)\s*$/; // Trim whitespace
console.log(wsHello.replace(reWS, '$1'));
