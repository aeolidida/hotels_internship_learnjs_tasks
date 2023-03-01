/*
Создайте new Accumulator
важность: 5
Создайте функцию-конструктор Accumulator(startingValue).

Объект, который она создаёт, должен уметь следующее:

Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
Метод read() должен использовать prompt для считывания нового числа и прибавления его к value.
Другими словами, свойство value представляет собой сумму всех введённых пользователем значений, с учётом начального значения startingValue.

Ниже вы можете посмотреть работу кода:

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

alert(accumulator.value); // выведет сумму этих значений
*/

import { createInterface } from "readline";

function Accumulator(value){
    this.value = value
    this.read = async function() {
        return new Promise((resolve)=>{
            const rl = createInterface({
                input: process.stdin,
                output: process.stdout,
            });
            rl.question("Добавьте число\n", (aStr) => {
                this.value += Number(aStr);
                rl.close();
                resolve();
            });
        })
    };
}

let accumulator = new Accumulator(1);
await accumulator.read();
await accumulator.read();
console.log("Значение числа в аккумуляторе:", accumulator.value);


