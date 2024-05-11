1.
export const LOG_LEVEL = {
    DEBUG: 0,
    INFO: 1,
    WARNING: 2,
    ERROR: 3
};

let logThreshold = LOG_LEVEL.INFO; // Поріг рівня логування за замовчуванням

export function setLogLevel(level) {
    logThreshold = level;
}

export function log(level, message) {
    if (level >= logThreshold) {
        console.log(`[${new Date().toISOString()}] [${level}] ${message}`);
    }
}
2.
export default class Logger {
    static LOG_LEVEL = {
        DEBUG: 0,
        INFO: 1,
        WARNING: 2,
        ERROR: 3
    };

    static #logThreshold = Logger.LOG_LEVEL.INFO; // Поріг рівня логування за замовчуванням

    static setLogLevel(level) {
        Logger.#logThreshold = level;
    }

    static log(level, message) {
        if (level >= Logger.#logThreshold) {
            console.log(`[${new Date().toISOString()}] [${level}] ${message}`);
        }
    }
}
3.
            // script.js
            import CryptoJS from 'https://cdn.skypack.dev/crypto-js';

            const message = 'Hello, World!';
            const secretKey = 'supersecretkey';

            // Encryption
            const encryptedMessage = CryptoJS.AES.encrypt(message, secretKey).toString();
            console.log('Encrypted Message:', encryptedMessage);

            // Decryption
            const decryptedBytes = CryptoJS.AES.decrypt(encryptedMessage, secretKey);
            const decryptedMessage = decryptedBytes.toString(CryptoJS.enc.Utf8);
console.log('Decrypted Message:', decryptedMessage);
4.// cipher.js
import { log } from './logger.js';

const CaesarCipher = {
    encrypt(text, shift) {
        return text.split('').map(char => {
            if (char.match(/[a-z]/i)) {
                const code = char.charCodeAt(0);
                const isUpperCase = code >= 65 && code <= 90;
                const shiftAmount = isUpperCase ? 65 : 97;
                return String.fromCharCode(((code - shiftAmount + shift) % 26) + shiftAmount);
            }
            return char;
        }).join('');
    },

    decrypt(text, shift) {
        return this.encrypt(text, 26 - shift);
    }
};

export default CaesarCipher;

export function decryptWithLogging(text, shift) {
    log(Logger.LOG_LEVEL.INFO, `Attempting decryption of: "${text}" with shift ${shift}`);
    return CaesarCipher.decrypt(text, shift);
}
5.
// cipher.js
import { log } from './logger.js';

const CaesarCipher = {
    encrypt(text, shift) {
        return text.split('').map(char => {
            if (char.match(/[a-z]/i)) {
                const code = char.charCodeAt(0);
                const isUpperCase = code >= 65 && code <= 90;
                const shiftAmount = isUpperCase ? 65 : 97;
                return String.fromCharCode(((code - shiftAmount + shift) % 26) + shiftAmount);
            }
            return char;
        }).join('');
    },

    decrypt(text, shift) {
        return this.encrypt(text, 26 - shift);
    }
};

export default CaesarCipher;

export function decryptWithLogging(text, shift) {
    log(Logger.LOG_LEVEL.INFO, `Attempting decryption of: "${text}" with shift ${shift}`);
    return CaesarCipher.decrypt(text, shift);
}

