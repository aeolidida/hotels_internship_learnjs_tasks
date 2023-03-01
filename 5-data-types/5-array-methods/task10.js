/*
Перемешайте массив
важность: 3

Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.

Многократные прогоны через shuffle могут привести к разным последовательностям элементов. Например:

let arr = [1, 2, 3];

shuffle(arr);
// arr = [3, 2, 1]

shuffle(arr);
// arr = [2, 1, 3]

shuffle(arr);
// arr = [3, 1, 2]
// ...

Все последовательности элементов должны иметь одинаковую вероятность. 
Например, [1,2,3] может быть переупорядочено как [1,2,3] или [1,3,2], или [3,1,2] и т.д., 
с равной вероятностью каждого случая.
*/

/*
Более долгий метод, чем Тасование Фишера — Йетса, но как видно по тестом, перемешивает элементы достаточно случайно
*/

function shuffle(arr) {
    let len = arr.length;
    let randomIndexes = [];
    for (let i = 0; i < len; i++) {
        let index = randomInteger(0, len - 1);
        if (randomIndexes.indexOf(index) == -1) {
            randomIndexes.push(index);
        } else {
            i--;
        }
    }
    return arr.sort(
        (a, b) => randomIndexes[arr.indexOf(a)] - randomIndexes[arr.indexOf(b)]
    );
}

function randomInteger(min, max) {
    let r = Math.random();
    return Math.floor(min + r * (max + 1 - min));
}

function test(arr) {
    let freq = new Map();

    for (let i = 0; i < 1000000; i++) {
        let tempArray = arr.slice();
        shuffle(tempArray);
        let tempArrayString = tempArray.join("");

        if (freq.has(tempArrayString)) {
            freq.set(tempArrayString, freq.get(tempArrayString) + 1);
        } else {
            freq.set(tempArrayString, 1);
        }
    }

    return freq;
}

let arr = [1, 2, 3];

console.log(shuffle(arr));
console.log(shuffle(arr));
console.log(shuffle(arr));
console.log(test(arr));

