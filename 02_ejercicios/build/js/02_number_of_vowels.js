"use strict";
let getNumberOfVowels = (str) => {
    let numVowels = 0;
    for (let i = 0; i < str.length; i++) {
        let unicodeVal = str.charCodeAt(i);
        if (
        //normal Vowels
        str[i] == 'a' || str[i] == 'A' ||
            str[i] == 'e' || str[i] == 'E' ||
            str[i] == 'i' || str[i] == 'I' ||
            str[i] == 'o' || str[i] == 'O' ||
            str[i] == 'u' || str[i] == 'U' ||
            //special Vowels
            (unicodeVal >= 192 && unicodeVal <= 197) ||
            (unicodeVal >= 200 && unicodeVal <= 207) ||
            (unicodeVal >= 210 && unicodeVal <= 214) ||
            (unicodeVal >= 217 && unicodeVal <= 220) ||
            (unicodeVal >= 224 && unicodeVal <= 229) ||
            (unicodeVal >= 232 && unicodeVal <= 239) ||
            (unicodeVal >= 242 && unicodeVal <= 246) ||
            (unicodeVal >= 249 && unicodeVal <= 262)) {
            numVowels += 1;
        }
    }
    return numVowels;
};
const test2 = 'aAáòöä eE ÉÄÒ iI oO uU';
console.log(getNumberOfVowels(test2));
