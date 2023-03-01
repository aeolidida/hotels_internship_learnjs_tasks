/*
Создайте калькулятор при помощи конструктора, new Calculator
важность: 5
Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
sum() возвращает сумму этих свойств.
mul() возвращает произведение этих свойств.
Например:

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
*/

import { createInterface } from "readline";

function Calculator(){
    this.read = async function() {
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
    };
    this.sum = function() {
        return this.a + this.b;
    };
    this.mul = function()  {
        return this.a * this.b;
    };
}

let calculator = new Calculator();
await calculator.read();
console.log("Сумма:", calculator.sum());
console.log("Произведение:", calculator.mul());

await calculator.read();
console.log("Сумма:", calculator.sum());
console.log("Произведение:", calculator.mul());
