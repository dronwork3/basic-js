class VigenereCipheringMachine {
    constructor(mode) {
        if (mode == false) {
            this.mode = false;
        } else {
            this.mode = true;
        }
    }

    encrypt(message, key) {
        if (!message || !key) throw new Error();

        message = message.toUpperCase();
        key = key.toUpperCase();

        let result = "";
        let number;

        while (key.length < message.length) {
            key += key;
        }

        for (let i = 0, j = 0; i < message.length; i++ , j++) {
            if (ABC.includes(message[i])) {
                number = ABC.indexOf(message[i]) + ABC.indexOf(key[j])
                if (number >= ABC.length) {
                    number -= ABC.length;
                }
                result += ABC[number];
            } else {
                result += message[i];
                j--;
            }
        }

        if (this.mode == false) {
            return result.split('').reverse().join('');
        } else {
            return result;
        }
    }

    decrypt(message, key) {
        if (!message || !key) throw new Error();

        message = message.toUpperCase();
        key = key.toUpperCase();

        let result = "";
        let number = 0;

        while (key.length < message.length) {
            key += key;
        }

        for (let i = 0, j = 0; i < message.length; i++ , j++) {
            if (ABC.includes(message[i])) {
                number = ABC.indexOf(message[i]) - ABC.indexOf(key[j])
                if (number < 0) {
                    number += ABC.length;
                }
                result += ABC[number];
            } else {
                result += message[i];
                j--;
            }
        }

        if (this.mode == false) {
            return result.split('').reverse().join('');
        } else {
            return result;
        }
    }
}

module.exports = VigenereCipheringMachine;

let ABC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';