/*
Случайное целое число от min до max
важность: 2
Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число 
от min до max (включительно).

Любое число из интервала min..max должно появляться с одинаковой вероятностью.
*/

function randomInteger(min, max) {
    let r = Math.random();
    return Math.floor(min+r*(max+1-min));
}

console.log(randomInteger(1,5));