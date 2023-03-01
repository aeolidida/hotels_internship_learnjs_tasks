/*
Создайте дату
важность: 5

Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.

Для вывода используйте alert.
*/

// Без toLocaleString() дата выводится в UTC+0. В браузере поведение другое
console.log(new Date(2012, 1, 20, 3, 12).toLocaleString());

/*
Покажите день недели
важность: 5

Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

Например:

let date = new Date(2012, 0, 3);  // 3 января 2012 года
alert( getWeekDay(date) );        // нужно вывести "ВТ"
*/

function getWeekDay(date) {
    let days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
    return days[date.getDay()];
}

let date = new Date(2012, 0, 3); // 3 января 2012 года
console.log(getWeekDay(date)); // нужно вывести "ВТ"

/*
День недели в европейской нумерации
важность: 5

В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник (номер 2) 
и так до воскресенья (номер 7). Напишите функцию getLocalDay(date), которая возвращает «европейский» 
день недели для даты date.

let date = new Date(2012, 0, 3);  // 3 января 2012 года
alert( getLocalDay(date) );       // вторник, нужно показать 2

Открыть песочницу с тестами для задачи.
*/

function getLocalDay(date) {
    let day = date.getDay();
    return day == 0 ? 7 : day;
}

date = new Date(2012, 0, 3); // 3 января 2012 года
console.log(getLocalDay(date)); // вторник, нужно показать 2

/*
Какой день месяца был много дней назад?
важность: 4

Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.

К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт девятнадцатое и 
getDateAgo(new Date(), 2) – восемнадцатое.

Функция должна надёжно работать при значении days=365 и больших значениях:

let date = new Date(2015, 0, 2);

alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)

P.S. Функция не должна изменять переданный ей объект date.
*/

function getDateAgo(date, days) {
    let tempDate = new Date(date);

    tempDate.setDate(date.getDate() - days);
    return tempDate.getDate();
}

date = new Date(2015, 0, 2);
console.log(getDateAgo(date, 1)); // 1, (1 Jan 2015)
console.log(getDateAgo(date, 2)); // 31, (31 Dec 2014)
console.log(getDateAgo(date, 365)); // 2, (2 Jan 2014)

/*
Последнее число месяца?
важность: 5

Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. 
Иногда это 30, 31 или даже февральские 28/29.

Параметры:

    year – год из четырёх цифр, например, 2012.
    month – месяц от 0 до 11.

К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).
*/

function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}

console.log(getLastDayOfMonth(2010, 1));
console.log(getLastDayOfMonth(2011, 1));
console.log(getLastDayOfMonth(2012, 1));
console.log(getLastDayOfMonth(2015, 0));

/*
Сколько сегодня прошло секунд?
важность: 5

Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.

Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:

getSecondsToday() == 36000 // (3600 * 10)

Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.
*/

function getSecondsToday() {
    let dateToday = new Date();
    let dateStartToday = new Date(
        dateToday.getFullYear(),
        dateToday.getMonth(),
        dateToday.getDate()
    );
    return Math.round((dateToday.getTime() - dateStartToday.getTime()) / 1000);
}

console.log(getSecondsToday());

/*
Сколько секунд осталось до завтра?
важность: 5

Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.

Например, если сейчас 23:00, то:

getSecondsToTomorrow() == 3600

P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.
*/

function getSecondsToTomorrow() {
    let dateToday = new Date();
    let dateTomorrow = new Date(
        dateToday.getFullYear(),
        dateToday.getMonth(),
        dateToday.getDate() + 1
    );
    return Math.round((dateTomorrow.getTime() - dateToday.getTime()) / 1000);
}

console.log(getSecondsToTomorrow());

/*
Форматирование относительной даты
важность: 4

Напишите функцию formatDate(date), форматирующую date по следующему принципу:

    Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
    В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
    В противном случае, если меньше часа, вывести "m мин. назад".
    В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", 
    всё в виде двух цифр, т.е. 31.12.16 10:00.

Например:

alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) );
*/

function formatDate(date) {
    let dateNow = new Date();
    if (dateNow.getTime() - date.getTime() < 1000) return "прямо сейчас";
    else if (dateNow.getTime() - date.getTime() < 1000 * 60) {
        return `${Math.round(
            (dateNow.getTime() - date.getTime()) / 1000
        )} сек. назад`;
    } else if (dateNow.getTime() - date.getTime() < 1000 * 60 * 60) {
        return `${Math.round(
            (dateNow.getTime() - date.getTime()) / (1000 * 60)
        )} мин. назад`;
    } else {
        let d = ("0" + date.getDate()).slice(-2);
        let month = ("0" + (date.getMonth() + 1)).slice(-2);
        let year = String(date.getFullYear()).slice(-2);
        let hours = ("0" + date.getHours()).slice(-2);
        let minutes = ("0" + date.getMinutes()).slice(-2);
        return `${d}.${month}.${year} ${hours}:${minutes}`;
    }
}

console.log(formatDate(new Date(new Date() - 1))); // "прямо сейчас"
console.log(formatDate(new Date(new Date() - 30 * 1000))); // "30 сек. назад"
console.log(formatDate(new Date(new Date() - 5 * 60 * 1000))); // "5 мин. назад"
console.log(formatDate(new Date(new Date() - 86400 * 1000)));
