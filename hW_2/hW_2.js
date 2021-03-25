'use strict'
//Task_1//

var a = 1, b = 1, c, d; 
c = ++a; alert(c); // 2 запись ++а сначала добаляет единицу к "а", а затем возвращает результат.Соответственно "с" будет присвоено значение "2".
d = b++; alert(d); // 1 запись b++ сначала вернет старое значение, а затем выполнится прибавление единицы. Соответственно значению "d" будет присвоено значение "1", а после "b" станет равна "2". Ну и "d" тоже.
c = (2 + ++a); alert(c); // 5 Поскольку в строке кода под номером 5 значение "а" стала равна "2", то в этой части кода мы имеем: С = (2 + (2+1)). Итого "5". Все верно!
d = (2 + b++); alert(d); // 4 в строке 6 кода "b" получила значение 2. Соответственно здесь мы имеем (2 + 2), а уже после "b" станет равна "3".
alert(a); // 3 "a" стала равна "3" в строке 7.
alert(b); // 3 "b" стала равна "3" в строке 8.

// //Task_2//

var a = 2;
var x = 1 + (a *= 2); // 5 Запись а *= 2 означает 2 * 2 - равно "4" + 1 = 5.

// //Task_3//

let n = -3,
    m = 5;

function calc(a, b) {
    if (a >= 0 && b > 0) {
        return a - b;
    } else if (a < 0 && b < 0) {
        return a * b;
    } else {
        return a + b;
    }
}
console.log(calc(n, m));

// //Task_4//

let k = +prompt('Введите целое число от 1 до 15:', '');
switch (k) {
    case 0:
        console.log(++k);
    case 1:
        console.log(++k);
    case 2:  
        console.log(++k);
    case 3:
        console.log(++k);
    case 4: 
        console.log(++k);
    case 5:
        console.log(++k);
    case 6:
        console.log(++k);
    case 7:
        console.log(++k);
    case 8:
        console.log(++k);
    case 9:
        console.log(++k);
    case 10:
        console.log(++k);
    case 11: 
        console.log(++k);
    case 12: 
        console.log(++k);
    case 13:
        console.log(++k); 
    case 14: 
        console.log(++k);
    case 15:
        break;
    default:
        console.log('Вы ввели неправильное число!!!')
}
//Task_5//

let arg1 = +prompt('Введите любое первое число: ', ''),
    arg2 = +prompt('Введите любое первое число: ', '');

function plus(arg1, arg2) {
     return arg1 + arg2;
}
function minus(arg1, arg2) {
    return arg1 - arg2;
}
function mult(arg1, arg2) {
    return arg1 * arg2;
}
function devis(arg1, arg2) {
    return arg1 / arg2;
}
alert(plus(arg1, arg2));

//Task_6//

let arg1 = +prompt('Введите любое первое число: ', ''),
    arg2 = +prompt('Введите любое второе число: ', ''),
    operation = prompt('Введите любое арифметическое действие ("плюс", "минус", "умножить", "разделить"): ', '');

mathOperation(arg1, arg2, operation);

function mathOperation(arg1, arg2, operation) {
    switch(operation) {
        case 'плюс' :
            alert(plus(arg1, arg2));
            break;
        case 'минус' :
            alert(minus(arg1, arg2));
            break;
        case 'умножить' :
            alert(mult(arg1, arg2));
            break;
        case 'разделить' :
            alert(devis(arg1, arg2));
            break;     
    }
}

//Task_8//
let r = +prompt('Введите любое число для возведения в степень: ', ''),
    s = +prompt('Введите степень в которую нужно возвести число: ', '');

function power(val, pow) {
    if (pow == 1) {
        return val;
    } else {
        return val * power(val, pow - 1);
    }
}
alert(power(r, s));