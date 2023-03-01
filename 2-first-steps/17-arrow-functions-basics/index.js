/*
Перепишите с использованием функции-стрелки
Замените код Function Expression стрелочной функцией:

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  function() { alert("Вы согласились."); },
  function() { alert("Вы отменили выполнение."); }
);
*/
import { createInterface } from "readline";

async function ask(question, yes, no) {
	if (await confirm(question)) yes();
	else no();
}

ask(
	"Вы согласны?\n",
	() => console.log("Вы согласились."),
	() => console.log("Вы отменили выполнение.")
);

async function confirm(message) {
	return new Promise((resolve) => {
		const rl = createInterface({
			input: process.stdin,
			output: process.stdout,
		});

		rl.question(message, function (str) {
			rl.close();
			if (str.toLowerCase() == "да") {
				resolve(true);
			} else {
				resolve(false);
			}
		});
	});
}
