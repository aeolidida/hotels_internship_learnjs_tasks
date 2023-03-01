/*
Подмассив наибольшей суммы
важность: 2
На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].

Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.

Функция getMaxSubSum(arr) должна возвращать эту сумму.

Например:

getMaxSubSum([-1, 2, 3, -9]) == 5 (сумма выделенных элементов)
getMaxSubSum([2, -1, 2, 3, -9]) == 6
getMaxSubSum([-1, 2, 3, -9, 11]) == 11
getMaxSubSum([-2, -1, 1, 2]) == 3
getMaxSubSum([100, -9, 2, -3, 5]) == 100
getMaxSubSum([1, 2, 3]) == 6 (берём все)
Если все элементы отрицательные – ничего не берём(подмассив пустой) и сумма равна «0»:

getMaxSubSum([-1, -2, -3]) = 0
Попробуйте придумать быстрое решение: O(n2), а лучше за О(n) операций.
*/

function getMaxSubSum(arr) {
    let maxSum = 0;

    let afterNegativeSum = 0;
    let continuousSum = 0;

    for (let number of arr) {
        if (number < 0 && maxSum == 0) {
            continue;
        } else if (number > 0) {
            continuousSum += number;
            afterNegativeSum += number;
            maxSum = Math.max(continuousSum, afterNegativeSum, maxSum);
            continuousSum = Math.max(afterNegativeSum, continuousSum);
        } else if (number < 0) {
            continuousSum += number;
            afterNegativeSum = 0;
        }
    }
    return maxSum;
}

console.log(getMaxSubSum([-1, 2, 3, -9]), getMaxSubSum([-1, 2, 3, -9]) == 5);
console.log(
    getMaxSubSum([2, -1, 2, 3, -9]),
    getMaxSubSum([2, -1, 2, 3, -9]) == 6
);
console.log(
    getMaxSubSum([-1, 2, 3, -9, 11]),
    getMaxSubSum([-1, 2, 3, -9, 11]) == 11
);
console.log(getMaxSubSum([-2, -1, 1, 2]), getMaxSubSum([-2, -1, 1, 2]) == 3);
console.log(
    getMaxSubSum([100, -9, 2, -3, 5]),
    getMaxSubSum([100, -9, 2, -3, 5]) == 100
);
console.log(getMaxSubSum([1, 2, 3]), getMaxSubSum([1, 2, 3]) == 6);
console.log(
    getMaxSubSum([1, 2, 3, -3, -5, 100, -99, 5, 6, 150]),
    getMaxSubSum([1, 2, 3, -3, -5, 100, -99, 5, 6, 150]) == 162
);
