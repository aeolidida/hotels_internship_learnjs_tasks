/*
Фильтрация уникальных элементов массива
важность: 5
Допустим, у нас есть массив arr.

Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.

*/

function unique(arr) {
    return [...(new Set(arr)).keys()];
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
"Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(values));

/*

Отфильтруйте анаграммы
важность: 4

Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

Например:

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"
Из каждой группы анаграмм должно остаться только одно слово, не важно какое.

*/

function aclean(arr){
    let tempMap = new Map();
    for (let word of arr){
        tempMap.set(Array.from(word.toLowerCase()).sort().join(""), word);
    }
    return [...tempMap.values()];
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
console.log(aclean(arr));