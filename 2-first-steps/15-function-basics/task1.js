/*
Перепишите функцию, используя оператор '?' или '||'
важность: 4

Следующая функция возвращает true, если параметр age больше 18.

В ином случае она задаёт вопрос confirm и возвращает его результат.

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}

Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.

Сделайте два варианта функции checkAge:

    Используя оператор ?
    Используя оператор ||

*/

import { createInterface } from "readline";

async function checkAge(age) {
    return age > 18 ? true : await confirm("Родители разрешили?\n");
}

async function confirm(message) {
    return new Promise((resolve) => {
        const rl = createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        rl.question(message, function (str) {
            rl.close();
            if (str.toLowerCase() == "да") {
                resolve(true);
            } else {
                resolve(false);
            }
        });
    });
}

let result = await checkAge(12);
console.log(result);