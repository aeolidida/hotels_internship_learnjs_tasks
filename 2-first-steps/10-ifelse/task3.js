/*
Перепишите 'if' в '?'
важность: 5
Перепишите конструкцию if с использованием условного оператора '?':

let result;

if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}
*/

let a = 1;
let b = 2;
let result = (a + b < 4)? 'Мало' : 'Много';
console.log(result);

a = 6;
b = 7;
result = (a + b < 4)? 'Мало' : 'Много';
console.log(result);
