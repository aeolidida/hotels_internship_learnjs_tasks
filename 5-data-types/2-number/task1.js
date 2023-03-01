/*
Сумма пользовательских чисел
важность: 5
Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.
*/

import { createInterface } from "readline";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Введите первое число\n", function(aStr) {
    let a = Number(aStr);
    rl.question("Введите второе число\n", function(bStr) {
        let b = Number(bStr);
        console.log("Сумма чисел:", a+b);
        rl.close();
    });
});