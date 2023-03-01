/*
Улучшенные часы
важность: 5
У нас есть класс Clock. Сейчас он выводит время каждую секунду

Создайте новый класс ExtendedClock, который будет наследоваться от Clock и 
добавьте параметр precision – количество миллисекунд между «тиками». Установите значение в 1000 (1 секунда) по умолчанию.

Сохраните ваш код в файл extended-clock.js
Не изменяйте класс clock.js. Расширьте его.
*/

import { Clock } from "./clock.js";

class ExtendedClock extends Clock {
	constructor(configuration) {
		super(configuration);
		this.precision = configuration.precision? configuration.precision : 1000;
	}
	start() {
        this.render();
        this.timer = setInterval(() => this.render(), this.precision);
    }
}

let clock = new ExtendedClock({template: 'h:m:s', precision: 2000});
clock.start();
setTimeout(()=>clock.stop(), 5000);
