// 1. Клас автомобіля за допомогою функції конструктора
function CarConstructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
}

const car1 = new CarConstructor("Toyota", "Corolla", 2020);
console.log(car1); // Виведе: CarConstructor { brand: 'Toyota', model: 'Corolla', year: 2020 }

// 1. Клас автомобіля за допомогою синтаксису класу
class CarClass {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
}

const car2 = new CarClass("Honda", "Civic", 2018);
console.log(car2); // Виведе: CarClass { brand: 'Honda', model: 'Civic', year: 2018 }

// 2. Створення двох екземплярів класу Car за допомогою Object.create()
const carPrototype = {
    setCarDetails: function (brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
};

const car3 = Object.create(carPrototype);
car3.setCarDetails("Ford", "Focus", 2015);

const car4 = Object.create(carPrototype);
car4.setCarDetails("Chevrolet", "Malibu", 2017);

console.log(car3); // Виведе: { brand: 'Ford', model: 'Focus', year: 2015 }
console.log(car4); // Виведе: { brand: 'Chevrolet', model: 'Malibu', year: 2017 }

// 3. Клас персона без використання синтаксису class
function Person(name, surname, birthYear) {
    this.name = name;
    this.surname = surname;
    this.birthYear = birthYear;
    this.getAge = function () {
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    };
    this.getFullName = function () {
        return `${this.name} ${this.surname}`;
    };
}

const person1 = new Person("John", "Doe", 1985);
console.log(person1.getAge()); // Виведе: 39
console.log(person1.getFullName()); // Виведе: John Doe

// 4. Субклас класу персона з додаванням поля посада та перевизначенням методу getFullName
function Employee(name, surname, birthYear, position) {
    Person.call(this, name, surname, birthYear);
    this.position = position;
    const superGetFullName = this.getFullName;
    this.getFullName = function () {
        return `${superGetFullName.call(this)} (${this.position})`;
    };
}

const employee1 = new Employee("Alice", "Smith", 1990, "Manager");
console.log(employee1.getFullName()); // Виведе: Alice Smith (Manager)

// 5. Метод для визначення класу об'єктів та виведення імен класів
function printClassNames(obj1, obj2) {
    const className1 = obj1.constructor.name;
    const className2 = obj2.constructor.name;
    console.log(`Object 1 is of class ${className1}`);
    console.log(`Object 2 is of class ${className2}`);
}

printClassNames(person1, employee1); // Виведе: Object 1 is of class Person, Object 2 is of class Employee

// 6. Метод для перетворення екземпляра класу Person в ObservedPerson
function observePerson(person) {
    function ObservedPerson() {
        this.callCount = 0;
    }

    ObservedPerson.prototype = person;

    const observed = new ObservedPerson();

    for (let prop in person) {
        if (typeof person[prop] === 'function') {
            const originalFunction = person[prop];
            observed[prop] = function (...args) {
                console.log(`Function ${prop} called`);
                this.callCount++;
                return originalFunction.apply(this, args);
            };
        }
    }

    return observed;
}

const observedPerson = observePerson(person1);
observedPerson.getAge();
observedPerson.getAge();
console.log(observedPerson.callCount); // Виведе: 2

// 7. Абстрактний клас Shape
function Shape() { }

Shape.prototype.calculateArea = function () {
    throw new Error('Необхідно реалізувати метод calculateArea'');
};

Shape.prototype.calculatePerimeter = function () {
    throw new Error('Необхідно реалізувати метод calculateArea'');
};

// 8. Створення масиву фігур
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }

    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }

    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}

const shapes = [
    new Rectangle(5, 10),
    new Circle(7)
];

shapes.forEach(shape => {
    console.log(`Area: ${shape.calculateArea()}`);
    console.log(`Perimeter: ${shape.calculatePerimeter()}`);
});

