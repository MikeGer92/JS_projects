// let money, time;

// function start() {
//     money = +prompt('Введите Ваш бюджет на месяц:', '');
//     while (isNaN(money) || money == '' || money == null) {
//         money = +prompt('Введите Ваш бюджет на месяц:', '');
//     }
//     time = prompt('Введите дату в формате YYYY-MM-DD:', '');
// }
// start();
// let appData = {
//     budget: money,
//     expenses: {},
//     optionalExpenses: {},
//     income: [],
//     timeData: time,
//     savings: true
// };

// function chooseExpenses() {
//     for (let i = 0; i < 2; i++) {
//         let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//             b = prompt("Во сколько обойдется?", '');
//         if ((typeof (a)) === 'string' && (typeof (a)) != null &&
//             (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
//             console.log('OK!');
//             appData.expenses[a] = b;
//         } else {
//             console.log("bad result");
//             i--;
//         }
//     }
// }
// chooseExpenses();

// appData.moneyPerDay = (appData.budget / 30).toFixed(2);
// alert('Ежедневный бюджет: ' + appData.moneyPerDay);

// if (appData.moneyPerDay < 100) {
//     console.log('Минимальный уровень достатка');
// } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
//     console.log('Средний уровень достатка');
// } else if (appData.moneyPerDay > 2000) {
//     console.log('Высокий уровень достатка');
// }

// function checkSavings() {
//     if (appData.savings == true) {
//         let save = +prompt('Какова сумма накоплений: ', ''),
//             percent = +prompt('Под какой процент?', '');

//         appData.monthIncome = save / 100 / 12 * percent;
//         alert('Доход с Вашего депозита в месяц: ' + appData.monthIncome);
//     }
// }
// checkSavings();
// let arr = [5, 11, 1, 15, 3, 26, 8, 4],
//     i = arr.sort(compareNum);

// function compareNum(a, b) {
//     return a - b;
// }

// console.log(arr);
console.log(0 || "" || 2 || undefined || true || false);