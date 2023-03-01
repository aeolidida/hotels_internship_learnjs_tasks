/*
Название JavaScript
важность: 2
Используя конструкцию if..else, напишите код, который будет спрашивать: 
„Какое «официальное» название JavaScript?“

Если пользователь вводит «ECMAScript», то показать: «Верно!», 
в противном случае – отобразить: «Не знаете? ECMAScript!»
*/

import { createInterface } from "readline";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Какое «официальное» название JavaScript?\n", function(nameJS) {
    if (nameJS.toString() == "ECMAScript") {
        console.log("Верно!");
    } else {
        console.log("Не знаете? ECMAScript!");
    }
    rl.close();
});
