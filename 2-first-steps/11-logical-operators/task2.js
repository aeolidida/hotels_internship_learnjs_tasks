/*
Проверка значения вне диапазона
важность: 3
Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.

Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.
*/

let age = 2;

if (age < 14 || age > 90) {
    console.log("Переменная age не находится в диапазоне между 14 и 90 включительно");
}

if (!(age >= 14 && age <= 90)) {
    console.log("Переменная age не находится в диапазоне между 14 и 90 включительно");
}