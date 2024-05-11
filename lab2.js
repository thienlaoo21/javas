1.
// Створення масиву persons та додавання об'єктів
let persons = [
    { name: 'Іван', age: 23, city: 'Київ' },
    { name: 'Микола', age: 30, city: 'Миколаїв' },
    { name: 'Анастасія', age: 28, city: 'Львів' },
    { name: 'Влад', age: 25, city: 'Дніпро' },
    { name: 'Максим', age: 22, city: 'Житомир' }
];

// Встановлення властивостей для масиву persons
persons.groupName = 'A';
persons.teacher = 'Денис Борисович';
persons.year = '2023';

// Виведення елементів та властивостей масиву persons за допомогою різних версій циклу for
console.log("Виведення елементів та властивостей масиву persons:");
// Звичайний цикл for
console.log("Звичайний цикл for:");
for (let i = 0; i < persons.length; i++) {
    console.log(persons[i]);
}
console.log("groupName:", persons.groupName);
console.log("teacher:", persons.teacher);
console.log("year:", persons.year);

// Цикл for...of
console.log("\nЦикл for...of:");
for (let person of persons) {
    console.log(person);
}
console.log("groupName:", persons.groupName);
console.log("teacher:", persons.teacher);
console.log("year:", persons.year);

// Цикл for...in для властивостей
console.log("\nЦикл for...in для властивостей:");
for (let prop in persons) {
    console.log(prop + ":", persons[prop]);
}
2.
// Створення об'єкту defaults з налаштуваннями
    mode: 'тест',
    debugLevel: 'помилка',
    logFolder: 'корінь'
};

let userSetting = {
    mode: 'продукція',
    debugLevel: 'відстеження'
};

// Функція об'єднання властивостей об'єктів з пріоритетом властивостей userSetting
function mergeSettings(defaults, userSetting) {
    return { ...defaults, ...userSetting };
    // Або можна використати Object.assign():
    // return Object.assign({}, defaults, userSetting);
    // Або цикл for...in:
    // let merged = {};
    // for (let key in defaults) {
    //     merged[key] = userSetting.hasOwnProperty(key) ? userSetting[key] : defaults[key];
    // }
    // return merged;
}

console.log(mergeSettings(defaults, userSetting));
3.
// Додавання властивості до об'єкта person (рік народження)
let person = persons[0]; // Приклад для першої особи
Object.defineProperty(person, 'birthYear', {
    get: function () {
        return new Date().getFullYear() - this.age;
    },
    enumerable: true // Зроблюємо властивість видимою при ітерації через цикли
});

console.log(person.birthYear); // Виведе 2001 (якщо поточний рік 2022)
console.log(person); // Перевірка, що властивість коректно додана
4.
// Створення двох масивів
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

// Об'єднання двох масивів за допомогою методу concat()
let mergedArray1 = arr1.concat(arr2);
console.log(mergedArray1);

// Об'єднання двох масивів за допомогою оператора spread (...)
let mergedArray2 = [...arr1, ...arr2];
console.log(mergedArray2);

// Об'єднання двох масивів за допомогою методу push() та оператора spread (...)
let arr3 = [1, 2, 3];
let arr4 = [4, 5, 6];
arr3.push(...arr4);
console.log(arr3);
5.
let textArray = persons.map(person => `${person.name} from ${person.city} born in ${new Date().getFullYear() - person.age}`);
console.log(textArray);
6.
let olderThan20 = persons.filter(person => person.age > 20);
console.log(olderThan20);
7.
// Деструктуризація об'єкта person
let { name, city } = person;
console.log(name, city);

// Деструктуризація першого елементу масиву persons
let [firstPerson] = persons;
console.log(firstPerson);
8.function getUserData(userName) {
    let user = persons.find(person => person.name === userName);
    if (user) {
        return user;
    } else {
        throw new Error('Неможливо знайти користувача');
    }
}

function showUserInfo(userName) {
    console.log('Завантаження');
    try {
        let userData = getUserData(userName);
        console.log(userData);
        console.log('Завантаження завершено');
    } catch (error) {
        console.error(error.message);
    } finally {
        console.log('Завантаження завершено');
    }
}

showUserInfo('Іван'); // Приклад виклику

9.function textToLetters(text) {
    return text.split('');
}

console.log(textToLetters("Hello")); // Приклад виклику
10.function reverseWord(word) {
    return word.split('').reverse().join('');
}

console.log(reverseWord("Hello")); // Приклад виклику
11.function isJSFile(fileName) {
    return fileName.endsWith('.js');
}

console.log(isJSFile("script.js")); // Приклад виклику
12.function sentenceToWords(sentence) {
    return sentence.split(' ');
}

console.log(sentenceToWords("Це реченння.")); // Приклад виклику
13.let text = "JavaScript - топ ";
let newText = text.replace("JavaScript", "Python");
console.log(newText); // Виведе "Python -топ!"
