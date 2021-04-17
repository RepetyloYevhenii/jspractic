// let value = 0;
// let toString = String(value);
// console.log(toString, typeof (toString));
// toString = value + "";
// console.log(toString);

// value = "idgjig";
// let toNamber = Number(value);
// console.log(toNamber);
// toNamber = + value;
// console.log(toNamber);
// value = "gfgfgfg";
// toNamber = parseInt(value);
// console.log(toNamber);

// value = "";
// console.log(Number(value));
// let value = 1;
// value = ' ';
// console.log(value.length);
// console.log(value.trim());
// console.log(Number(value.trim()))

// value = true;
// console.log(Number(value));

// value = false;
// console.log(Number(value));

// value = null;
// console.log(Number(value));

// value = undefined;
// console.log(Number(value));

// value = true;
// console.log(Boolean(value));

// value = '';
// console.log(Boolean(value));

// value = ' ';
// console.log(Boolean(value));

// value = 0;
// console.log(Boolean(value));

// value = 1;
// console.log(Boolean(value));

// value = NaN;
// console.log(Boolean(value));

// value = Infinity;
// console.log(Boolean(value));

// value = Infinity;
// console.log(typeof (value));

// // value = !!value
// const nunber = 1;
// console.log(number);

// number = !!number;
// console.log(number);

// логические операторы

// && 

// console.log(1 && true && 'javascript');
//         // true  true     true

// console.log(0 && true && 'javascript');
//         // fals

// console.log(true && 0 && 'javascript');


// console.log(1 || true || 'javascript');


// console.log(0 || false || null);


// let age = 15;
// if (age >= 12 && age <= 14) {
//     console.log('ok');
// } else {
//     console.log('no')
// }

// let age = 15;
// if (age >= 12 || age <= 14) {
//     console.log('ok');
// } else {
//     console.log('no')
// }

// Проверить год високосный или нет

// let year = 2026;
// // let result = year % 4;
// // console.log(result)
// // if (year % 4 === 0) {
// //     console.log('${year} - високосный');
// // } else {
// //     console.log('${year} - не високосный');
// // }

// // pattern guard clause

// function checkYear() {
//     if (year % 4 === 0) return console.log(`${year} - високосный`);
//     return console.log(`${year} - не високосный`);
// }
// checkYear();

// програма. 
// Комп загадывает число, от 1 - 10.
// Пользователь указывае свое.
// Угадал (польз) или нет

// let compNumber;
// let userNumber = 5;

// function getplay() {
//     compNumber = Math.round(Math.random()*(10-1)+1)
//     console.log(compNumber)
//     if (userNumber === compNumber) {
//         console.log('вы угадали')
//     } else {
//         console.log('вы не угадали')
//     }
        
// }
// getPlay()

// написать прог +-*/2

// function getTotal()
// let num1 = Number(prompt('введите число 1'));
// let num2 = Number(prompt('введите число 2'));
// let sumbol = prompt('введите оператор');
// if (sumbol === '+') {
//     console.log(num1 + nam2);
// }
// else if (sumbol === '-') {
//     console.log(num1 - nam2);
// }
// else if (sumbol === '*') {
//     console.log(num1 * nam2);
// }
// else if (sumbol === '/') {
//     console.log(num1 / nam2);
// }
// else {
//     console.log('вы ввели не верный символ');
// }
// getTotal()

// температура из с в ф

// function temperatureToF(celsius) {
//     let result = celsius * 9 / 5 + 32;
//     return result
// }
// let result = temperatureToF(5)
// console.log(result)

function temperatureToC(far) {
    let result = Math.round(((far - 32) * 5 / 9)*100)/100;
    return result;
}
let result = temperatureToC(79)
console.log(result)

