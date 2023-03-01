/*
Сумма введённых чисел
важность: 4
Напишите функцию sumInput(), которая:

Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
Подсчитывает и возвращает сумму элементов массива.
P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».
*/

import { createInterface } from "readline";

let numbers = [];
while (true) {
    let num = await prompt("Введите число\n");

    if (num === "" || num === null || !isFinite(num)) break;

    numbers.push(Number(num));
}

console.log(
    "Сумма элементов:",
    numbers.reduce((prev, cur) => prev + cur, 0)
);

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
