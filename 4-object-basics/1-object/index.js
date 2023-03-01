/*
Привет, object
важность: 5
Напишите код, выполнив задание из каждого пункта отдельной строкой:

Создайте пустой объект user.
Добавьте свойство name со значением John.
Добавьте свойство surname со значением Smith.
Измените значение свойства name на Pete.
Удалите свойство name из объекта.
*/

let user = {};
console.log(user);

user.name = "John";
console.log(user);

user.surname = "Smith";
console.log(user);

user.name = "Pete";
console.log(user);

delete user.name;
console.log(user);

/* 
Проверка на пустоту
важность: 5
Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

Должно работать так:

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false
*/

function isEmpty(obj){
    for (let key in obj) {
        return false;
    }
    return true;
}

let schedule = {};
console.log( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
console.log( isEmpty(schedule) ); // false

/* 
Сумма свойств объекта
важность: 5
У нас есть объект, в котором хранятся зарплаты нашей команды:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

Если объект salaries пуст, то результат должен быть 0.
*/

function sumSalary(salaries){
    let sum = 0;
    for (let key in salaries){
        sum += salaries[key];
    }
    return sum;
}

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = sumSalary(salaries);
console.log(sum);
let sum2 = sumSalary({});
console.log(sum2);

/*
Умножаем все числовые свойства на 2
важность: 3
Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

Например:

// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// после вызова функции
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.

P.S. Используйте typeof для проверки, что значение свойства числовое.
*/

function multiplyNumeric(obj){
    for (let key in obj){
        if (typeof obj[key] === "number"){
            obj[key] = obj[key]*3;
        }
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

console.log(menu);
  
multiplyNumeric(menu);

console.log(menu);