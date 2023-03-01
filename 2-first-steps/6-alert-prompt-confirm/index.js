/*
Простая страница
важность: 4
Создайте страницу, которая спрашивает имя у пользователя и выводит его.
*/

import { createInterface } from "readline";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Как вас зовут?\n", function(answer) {
    console.log(`Привет, ${answer}!`);
    rl.close();
});