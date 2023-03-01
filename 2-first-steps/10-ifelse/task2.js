/*
Покажите знак числа
важность: 2
Используя конструкцию if..else, напишите код, который получает число через prompt, 
а затем выводит в alert:

1, если значение больше нуля,
-1, если значение меньше нуля,
0, если значение равно нулю.
Предполагается, что пользователь вводит только числа.
*/

import { createInterface } from "readline";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Введите число\n", function(numStr) {
    let num = Number(numStr)
    if (num > 0) {
        console.log(1);
    } else if (num < 0) {
        console.log(-1);
    } else {
      console.log(0);
    }
    rl.close();
});
