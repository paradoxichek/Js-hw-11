let arr = [10.45, 9.519, 85.56, 22, 6.26, 98.245, 15, 34.2]
let min
let max

min = Math.min(...arr)
min = Math.round(min)
console.log(min);

max = Math.max(...arr)
max =  Math.ceil(max)
console.log(max);

console.log(max % min);

// Достать наименьшее число с массива, округлить логически и сохранить в min  
// достать наибольшее число с массива, округлить вверх и сохранить в max
// поделить с остатком max на min, показать результат


let num1 = 10.4568313123132

let number = 10.4568313123132;
let roundedNumber = number.toFixed(3);
let stringNumber = roundedNumber.toString();
console.log(stringNumber);
console.log( stringNumber.length);
let fullNumber = parseInt(stringNumber)
console.log(fullNumber);
console.log(isNaN(fullNumber));

// 1. num1 переводим в string, оставляем только три цифры после точки: '10.456'
// 2. показать длину полученной строки 
// 3. полученную строку переводим в тип number оставляя лишь целое число (убрать все цифры после точки)
// 4. проверяем не является ли переменная типом number


let minRandom = 10
let maxRandom = 50

let randomNumber = Math.floor(Math.random() * (maxRandom - minRandom + 1)) + minRandom;
console.log(randomNumber);

// генерация рандомных чисел от 10 до 50


// Методы типа number
// .toString() // переводит в string
// .toFixed() // округляет не целые числа затем переводит в string
// Math.floor(num) // округление вниз
// Math.ceil(num) // округление вверх
// Math.round(num) // логической округление
// Math.min()
// Math.max()
// Math.random()
// Math.floor(Math.random() * (max - min + 1)) + min; // рандомные цифры с min, max
// parseFloat(num) // string => number
// parseInt(num) // string => number удаляет цифры после точки
// isNaN(num) // проверяет не является ли переменная типом number
// +num // string => number
