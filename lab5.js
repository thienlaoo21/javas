// 1. Функція invokeAfterDelay, яка повертає проміс з затримкою
function invokeAfterDelay(func, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                resolve(func());
            } catch (error) {
                reject(error);
            }
        }, delay);
    });
}

// Використовуємо для випадкового числа від 0 до 10
const getRandomNumber = () => Math.floor(Math.random() * 11);

invokeAfterDelay(getRandomNumber, 1000)
    .then(result => console.log("Random number:", result))
    .catch(error => console.error("Error:", error));

// 2. Функція, яка викликається двічі з заданою затримкою
async function produceRandomAfterDelay() {
    const result1 = await invokeAfterDelay(getRandomNumber, 2000);
    const result2 = await invokeAfterDelay(getRandomNumber, 2000);
    console.log("Sum of two random numbers:", result1 + result2);
}

produceRandomAfterDelay();

// 3. Функція sleep, яка повертає проміс з затримкою
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// 4. Функція getUser, яка повертає проміс з об'єктом користувача за заданим id
function getUser(id) {
    const users = [
        { id: 0, name: "John", age: 30, city: "New York" },
        { id: 1, name: "Alice", age: 25, city: "Los Angeles" },
        { id: 2, name: "Bob", age: 40, city: "Chicago" },
        { id: 3, name: "Emily", age: 35, city: "San Francisco" }
    ];

    return new Promise((resolve, reject) => {
        const user = users.find(user => user.id === id);
        if (user) {
            setTimeout(() => resolve(user), 1000);
        } else {
            reject("User not found");
        }
    });
}

// 5. Функція loadUsers, яка завантажує користувачів за масивом ідентифікаторів
async function loadUsers(ids) {
    const promises = ids.map(id => getUser(id));
    try {
        const users = await Promise.all(promises);
        return users;
    } catch (error) {
        console.error(error);
    }
}

loadUsers([0, 1, 2, 5]).then(users => console.log("Loaded users:", users));

// 6. Функція logCall, яка логує виклик функції та повертає проміс
function logCall(callback) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Current time:", new Date().toLocaleTimeString());
            resolve(callback());
        }, 1000);
    });
}

logCall(() => console.log("Function called"));

// 7. Функція showUsers, яка симулює завантаження користувачів
async function showUsers() {
    console.log("Loading...");
    try {
        const users = await loadUsers([0, 1, 2]);
        console.log("Loaded users:", users);
    } catch (error) {
        console.error("Error loading users:", error);
    } finally {
        console.log("Loading finished");
    }
}

showUsers();
