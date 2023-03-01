/*
Функция pow(x,n)
важность: 4

Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.

pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1

P.S. В этой задаче функция обязана поддерживать только натуральные значения n, т.е. целые от 1 и выше.
*/

function pow(x, n) {
    if (x == 1 || x==0) {
        return x;
    }
    let result = x;
    for (let i = 1; i < n; i++){
        result *= x;
    }
    return result;
}

console.log(pow(3, 2));
console.log(pow(3, 3));
console.log(pow(1, 100));
console.log(pow(2, 10));