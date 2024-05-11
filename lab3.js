// 1. Функція для знаходження середнього значення
const average = (...args) => {
    if (args.length === 0) return 0;
    const total = args.reduce((acc, val) => acc + val, 0);
    return total / args.length;
};

// 2. Функція для створення масиву значень функції в заданому діапазоні
const values = (f, low, high) => {
    const result = [];
    for (let i = low; i <= high; i++) {
        result.push(f(i));
    }
    return result;
};

// 3. Функція для виклику колбека з контекстом об'єкта
const callWithContext = (obj, callback) => {
    callback.call(obj);
};

const person = {
    name: "John",
    age: 30
};

function birthdayGreeting() {
    const today = new Date().toLocaleDateString();
    console.log(`Today is ${today}! Happy birthday ${this.name}.`);
}

callWithContext(person, birthdayGreeting);

// 4. Функція, яка повертає об'єкт з методами замикання
const createClosureObject = () => {
    let value = 0;
    return {
        increment: () => {
            value++;
        },
        getValue: () => value
    };
};

// 5. Функція для створення привітання з кешуванням результатів
const getGreeting = (() => {
    let lastInput = "";
    let lastOutput = "";

    return name => {
        if (name === lastInput) {
            return lastOutput;
        } else {
            lastInput = name;
            lastOutput = `Hello ${name}`;
            return lastOutput;
        }
    };
})();

// 6. Функція, яка повертає функцію, що додає до числа інше число
const add = x => {
    return y => x + y;
};

// 7. Функція для перевірки наявності текстового фрагменту в масиві
const checkFragment = array => {
    return fragment => {
        return array.includes(fragment);
    };
};

// 8. Функція для перетворення властивостей об'єктів на великі літери
const capitalizeProperties = arrayOfObjects => {
    return arrayOfObjects.map(obj => {
        const newObj = {};
        for (let key in obj) {
            newObj[key.charAt(0).toUpperCase() + key.slice(1)] = obj[key];
        }
        return newObj;
    });
};

// 9. Приклади використання call, apply, bind
const obj = {
    name: "Alice"
};

function greeting() {
    console.log(`Hello, ${this.name}!`);
}

greeting.call(obj); // викликати функцію з контекстом obj
greeting.apply(obj); // аналогічно call, але приймає масив аргументів
const boundGreeting = greeting.bind(obj); // створити нову функцію зі зміненим контекстом
boundGreeting();

// 10. Функція для виклику колбека з виведенням інформації
const logCallback = (callback, ...args) => {
    const functionName = callback.name || "Anonymous Function";
    const currentTime = new Date().toLocaleTimeString();
    console.log(`Function: ${functionName}, Args: ${args}, Time: ${currentTime}`);
    callback(...args);
};

// 11. Функція для кешування останнього виклику на 10 секунд
const cachedFunction = (() => {
    let lastCall = null;
    let lastResult = null;

    return (fn, timeout = 10000) => {
        return (...args) => {
            const now = Date.now();
            if (!lastCall || now - lastCall > timeout) {
                lastCall = now;
                lastResult = fn(...args);
            }
            return lastResult;
        };
    };
})();

// Приклади використання
const cachedAdd = cachedFunction(add);
console.log(cachedAdd(2)(3)); // поверне 5
console.log(cachedAdd(2)(3)); // поверне 5 (використано кеш)

