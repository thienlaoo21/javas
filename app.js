1.class Person {
    constructor(firstName, lastName, gender, maritalStatus) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.maritalStatus = maritalStatus;
    }

    toLocaleString() {
        let prefix;
        switch (this.gender) {
            case 'male':
                switch (this.maritalStatus) {
                    case 'single':
                        prefix = 'Mr.';
                        break;
                    case 'married':
                        prefix = 'Mr.';
                        break;
                    default:
                        prefix = 'Mr.';
                }
                break;
            case 'female':
                switch (this.maritalStatus) {
                    case 'single':
                        prefix = 'Miss';
                        break;
                    case 'married':
                        prefix = 'Mrs.';
                        break;
                    default:
                        prefix = 'Ms.';
                }
                break;
            default:
                prefix = '';
        }
        return `${prefix} ${this.lastName}`;
    }
}

// Приклад використання
const person1 = new Person('John', 'Smith', 'male', 'married');
console.log(person1.toLocaleString()); // Виведе 'Mr. Smith'

const person2 = new Person('Alice', 'Johnson', 'female', 'single');
console.log(person2.toLocaleString()); // Виведе 'Miss Johnson'
2.
function formatNumber(number) {
    const englishDigits = String(number);
    const arabicDigits = englishDigits.replace(/\d/g, d => String.fromCharCode(d.charCodeAt(0) + 1632));
    const thaiDigits = englishDigits.replace(/\d/g, d => '๐๑๒๓๔๕๖๗๘๙'[parseInt(d)]);
    console.log(`English: ${englishDigits}`);
    console.log(`Arabic: ${arabicDigits}`);
    console.log(`Thai: ${thaiDigits}`);
}

// Приклад використання
formatNumber(12345);
3.const locales = ['fr-FR', 'zh-CN', 'ar-EG', 'th-TH'];
const dates = [new Date(), new Date(), new Date(), new Date()]; // Використовуємо одну дату для всіх локацій

locales.forEach((locale, index) => {
    console.log(`Date format in ${locale}: ${dates[index].toLocaleString(locale)}`);
});
4.
function compareText(text1, text2, ignoreCase = false) {
    if (ignoreCase) {
        text1 = text1.toLowerCase();
        text2 = text2.toLowerCase();
    }
    return text1.localeCompare(text2);
}

// Приклад використання
console.log(compareText('Hello', 'hello')); // Виведе 1, оскільки 'H' > 'h'
console.log(compareText('apple', 'banana')); // Виведе -1, оскільки 'a' < 'b'
console.log(compareText('apple', 'Apple', true)); // Виведе 0, оскільки ігнорує регістр
5.
function messageFormat(template, ...args) {
    return template.replace(/{(\d+)}/g, (match, index) => args[index]);
}

// Приклад використання
const template = '{0} has {1} messages';
const formattedMessage = messageFormat(template, 'John', 5);
console.log(formattedMessage); // Виведе 'John has 5 messages'
6.class PaperSize {
    constructor(locale) {
        this.locale = locale;
        this.unit = locale === 'en-US' ? 'inches' : 'centimeters';
        this.defaultSize = locale === 'en-US' ? 'Letter' : 'A4';
    }

    getSize() {
        const sizes = {
            'en-US': { 'Letter': { width: 8.5, height: 11 }, 'Legal': { width: 8.5, height: 14 } },
            'fr-FR': { 'A4': { width: 21.0, height: 29.7 }, 'A3': { width: 29.7, height: 42.0 } },
            'zh-CN': { 'A4': { width: 21.0, height: 29.7 }, 'B5': { width: 18.2, height: 25.7 } },
            'th-TH': { 'A4': { width: 21.0, height: 29.7 }, 'A3': { width: 29.7, height: 42.0 } },
            'ar-EG': { 'A4': { width: 21.0, height: 29.7 }, 'B4': { width: 25.0, height: 35.3 } }
        };

        return sizes[this.locale][this.defaultSize];
    }
}

// Приклад використання
const paper = new PaperSize('fr-FR');
const size = paper.getSize();
console.log(`Default paper size in ${paper.locale}: ${size.width} x ${size.height} ${paper.unit}`);
