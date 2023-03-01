/*
Ввод числового значения
важность: 5
Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.

Функция должна возвращать числовое значение.

Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.
*/

import { createInterface } from "readline";

async function readNumber() {
    let num;
    do {
        num = await prompt("Введите число\n");
    } while (!isFinite(num));

    if (num == "" || num == null) return null;

    return Number(num);
}

async function prompt(message) {
    return new Promise((resolve) => {
        const rl = createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        let listener = function (s, key) {
            if (key.name == "escape") {
                console.log("Отменено");
                rl.close();
                resolve(null);
            }
        };
        process.stdin.on("keypress", listener);

        rl.question(message, function (str) {
            rl.close();
            process.stdin.removeListener("keypress", listener);
            resolve(str);
        });
    });
}

let result = await readNumber();
console.log("Конечное число:", result);
