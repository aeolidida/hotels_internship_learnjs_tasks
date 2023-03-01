/*

Скопировать и отсортировать массив
важность: 5

У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

Создайте функцию copySorted(arr), которая будет возвращать такую копию.

*/

let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
    return arr.slice().sort();
}

let sorted = copySorted(arr);

console.log(sorted); // CSS, HTML, JavaScript
console.log(arr); // HTML, JavaScript, CSS (без изменений)