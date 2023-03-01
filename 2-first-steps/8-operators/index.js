/*
Исправьте сложение
важность: 5
Ниже приведён код, который запрашивает у пользователя два числа и показывает их сумму.

Он работает неправильно. Код в примере выводит 12 (для значения полей по умолчанию).

В чём ошибка? Исправьте её. Результат должен быть 3.

let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);

alert(a + b); // 12

Адаптировано под Node.js
*/


import { createInterface } from "readline";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Первое число?\n", function(a) {
    rl.question("Второе число?\n", function(b) {
        console.log(Number(a) + Number(b)); 
        rl.close();
    });
});
