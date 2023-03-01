/*
Создайте калькулятор
важность: 5
Создайте объект calculator (калькулятор) с тремя методами:

read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
sum() (суммировать) возвращает сумму сохранённых значений.
mul() (умножить) перемножает сохранённые значения и возвращает результат.
let calculator = {
  // ... ваш код ...
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
*/

import { createInterface } from "readline";

let calculator = {
    async read() {
        return new Promise((resolve)=>{
            const rl = createInterface({
                input: process.stdin,
                output: process.stdout,
            });
            rl.question("Введите первое число\n", (aStr) => {
                this.a = Number(aStr);
                rl.question("Введите второе число\n", (bStr) => {
                    this.b = Number(bStr);
                    rl.close();
                    resolve();
                });
            });
        })
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    },
};

await calculator.read();
console.log("Сумма:", calculator.sum());
console.log("Произведение:", calculator.mul());

await calculator.read();
console.log("Сумма:", calculator.sum());
console.log("Произведение:", calculator.mul());
