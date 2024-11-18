"use strict";
const getNumberOfVowels = (str) => {
    const vowelRegex = /[aeiouAEIOU\u00C0-\u00C6\u00C8-\u00CE\u00D2-\u00D6\u00D9-\u00DC\u00E0-\u00E6\u00E8-\u00EE\u00F2-\u00F6\u00F9-\u00FE]/g;
    const matches = str.match(vowelRegex);
    return matches ? matches.length : 0;
};
const test2 = 'aAáòöä eE ÉÄÒ iI oO uU';
console.log(getNumberOfVowels(test2));
