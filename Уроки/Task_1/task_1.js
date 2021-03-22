'use strict';

var money = +prompt('Введите Ваш бюджет на месяц:', '_'),
    time = prompt('Введите дату в формате YYYY-MM-DD:', '_');
console.log(typeof (money));
console.log(money);

var appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
};
console.log(typeof (appData.money));
console.log(appData.money);

let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
    a2 = prompt("Во сколько обойдется?", ''),
    a3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
    a4 = prompt("Во сколько обойдется?", '');

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

console.log(typeof (appData.money));
console.log(appData.money);
alert(appData.budget / 30);