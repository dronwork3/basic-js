class VigenereCipheringMachine {
    arr = new Array();
    mode = "";
    constructor(bool = true) {
        if (bool == true) {
            this.mode = "direct";
            return this;
        } else if (bool == false) {
            this.mode = "reverse";
            return this;
        }
    }

    encrypt(message, key) {
        //if (message == undefined || key == undefined) { throw Error; }
        let str1 = "";
        for (let i = 0; i < 26; i++) {
            this.arr[i] = String.fromCharCode(i + 65);
        }
        for (let i = 26; i < 52; i++) {
            this.arr[i] = String.fromCharCode(i + 71);
        }
        let max1 = Math.max(message.length, key.length);
        if (key.length < max1) {
            key = key.repeat(Math.trunc(max1 / key.length)) + key.slice(0, max1 % key.length)
        }
        let key1 = key;
        let j = 0;
        key = "";
        for (let i = 0; i < message.length; i++) {
            if (this.arr.includes(message[i])) { key = key + key1[j]; j++ } else { key = key + " " }
        }
        if (key.length >= message.length) {
            for (let i = 0; i < message.length; i++) {
                if (this.arr.includes(message[i])) {
                    str1 = str1 + this.arr[(this.arr.indexOf(message[i]) + this.arr.indexOf(key[i])) % 26];
                } else { str1 = str1 + message[i]; }
            }

            if (this.mode == "direct") { return str1; } else if (this.mode == "reverse") {
                return str1.split("").reverse().join("")
            }
        } else { return (String(message.length) + " " + String(key.length) + " " + message + " " + key) }
    }

    decrypt(message, key) {
        //if (message == undefined || key == undefined) { throw Error; }
        let str1 = "";
        for (let i = 0; i < 26; i++) {
            this.arr[i] = String.fromCharCode(i + 65);
        }
        for (let i = 26; i < 52; i++) {
            this.arr[i] = String.fromCharCode(i + 71);
        }
        let max1 = Math.max(message.length, key.length);
        if (key.length < max1) {
            key = key.repeat(Math.trunc(max1 / key.length)) + key.slice(0, max1 % key.length)
        }
        let key1 = key;
        let j = 0;
        key = "";
        for (let i = 0; i < message.length; i++) {
            if (this.arr.includes(message[i])) { key = key + key1[j]; j++ } else { key = key + " " }
        }
        if (key.length >= message.length) {
            for (let i = 0; i < message.length; i++) {
                if (this.arr.includes(message[i])) {
                    str1 = str1 + this.arr[(this.arr.indexOf(message[i]) - this.arr.indexOf(key[i]) + 52) % 26];
                } else { str1 = str1 + message[i]; }
            }

            if (this.mode == "direct") { return str1; } else if (this.mode == "reverse") {
                return str1.split("").reverse().join("")
            }
        } else { return (String(message.length) + " " + String(key.length) + " " + message + " " + key) }
    }

}

module.exports = VigenereCipheringMachine;
