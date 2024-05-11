1.
let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log("Випадкове число:", randomNumber);
2.
let name = "Іван";
let age = 20;
let isStudent = true;

console.log("Ім'я:", name);
console.log("Вік:", age);
console.log("Студент:", isStudent);
3.
let num1 = 10;
let num2 = 20;
let sum = num1 + num2;

console.log("Сума чисел:", sum);
5.
let age = prompt("Скільки вам років?");
console.log("Ваш вік:", age);
6.
let quantity = prompt("Введіть кількість товару:");
let pricePerUnit = prompt("Введіть ціну за одиницю товару:");

let total = quantity * pricePerUnit;
console.log("Сума покупки:", total);
7.
let number = prompt("Введіть число:");

if (number < 0) {
    console.log("Число є від'ємним.");
} else if (number > 0) {
    console.log("Число є додатнім.");
} else {
    console.log("Число дорівнює нулю.");
}

8.let number = prompt("Введіть число:");

if (number < 0) {
    console.log("Число є від'ємним.");
} else if (number > 0) {
    console.log("Число є додатнім.");
} else {
    console.log("Число дорівнює нулю.");
}
9.
console.log("Таблиця множення числа 6:");

for (let i = 1; i <= 10; i++) {
    let result = 6 * i;
    console.log(`6 * ${i} = ${result}`);
}
10.
let n = [3, -5, 7, 9, -2];

let thirdSquare = n[2] ** 2;
let sumFirstLast = n[0] + n[n.length - 1];
let sumNegativeSquares = 0;

for (let i = 0; i < n.length; i++) {
    if (n[i] < 0) {
        sumNegativeSquares += n[i] ** 2;
    }
}

console.log("Квадрат третього числа:", thirdSquare);
console.log("Сума першого і останнього елементів:", sumFirstLast);
console.log("Сума квадратів від'ємних елементів:", sumNegativeSquares);
11.
let cars = [
    { owner: "Іван", model: "Toyota", engineCapacity: 1.6 },
    { owner: "Аліса", model: "BMW", engineCapacity: 2.0 },
    { owner: "Микола", model: "Mercedes", engineCapacity: 1.8 }
];

let minEngineCar = cars.reduce((minCar, currentCar) => {
    return currentCar.engineCapacity < minCar.engineCapacity ? currentCar : minCar;
});

console.log("Машина з мінімальним об'ємом двигуна:", minEngineCar);
12.let a = prompt("Введіть перше число:");
let b = prompt("Введіть друге число:");
let c = prompt("Введіть третє число:");
let d = prompt("Введіть четверте число:");

let minAB = Math.min(a, b);
let minCD = Math.min(c, d);
let result = Math.max(minAB, minCD);

console.log("Результат:", result);
13.let word = prompt("Введіть слово:");
let length = word.length;

console.log("Довжина слова:", length);

let reversedWord = "";

for (let i = length - 1; i >= 0; i--) {
    reversedWord += word[i];
}

console.log("Слово у зворотному порядку:", reversedWord);





