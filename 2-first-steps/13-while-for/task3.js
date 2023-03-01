/*
Повторять цикл, пока ввод неверен
важность: 5
Напишите цикл, который предлагает prompt ввести число, большее 100. 
Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.

Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена (ESC).

Предполагается, что посетитель вводит только числа. 
Предусматривать обработку нечисловых строк в этой задаче необязательно.
*/

import { createInterface } from "readline";

let num;
do {
    num = await prompt("Введите число больше 100\n")
    if (num == null) break;
    num = isNaN(Number(num))? 0 : Number(num)
} while (num <= 100)

async function prompt(message){
    return new Promise((resolve)=>{
        const rl = createInterface({
            input: process.stdin,
            output: process.stdout
        });

        let listener = function(s,key) {
            if (key.name == "escape") {
                console.log("Отменено");
                rl.close();
                resolve(null)
            }
        }
        process.stdin.on("keypress", listener)

        rl.question(message, function(str) {
            rl.close();
            process.stdin.removeListener("keypress", listener)
            resolve(str);
        });
    })
}