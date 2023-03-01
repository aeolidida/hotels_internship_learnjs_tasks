/*
Проверка логина
важность: 3
Напишите код, который будет спрашивать логин с помощью prompt.

Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», 
в противном случае отобразить «Я вас не знаю».

Пароль проверять так:

Если введён пароль «Я главный», то выводить «Здравствуйте!»,
Иначе – «Неверный пароль»,
При отмене – «Отменено».
*/

import { createInterface } from "readline";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

process.stdin.on("keypress", function(s,key) {
    if (key.name == "escape") {
        console.log("Отменено");
        rl.close(); 
    }
})

rl.question("Кто там?\n", function(name) {
    if (name == "") {
        console.log("Отменено");
        rl.close();
    } else if (name != "Админ") {
        console.log("Я вас не знаю");
        rl.close();   
    } else {
        rl.question("Пароль?\n", function(password) {
            if (password == "") {
                console.log("Отменено");
                rl.close();
            } else if (password == "Я главный") {
                console.log("Здравствуйте!");
                rl.close();   
            } else {
                console.log("Неверный пароль");
                rl.close();
            }
        });
    }
});
