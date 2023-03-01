/* 
Фильтрация по диапазону "на месте"
важность: 4

Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.

Функция должна изменять принимаемый массив и ничего не возвращать.
*/

function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        let temp = arr[i];

        if (temp < a || temp > b) {
            arr.splice(i, 1);
            i--;
        }
    }
    return arr.filter((num) => num > a && num < b);
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

console.log(arr); // [3, 1]
