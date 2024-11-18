"use strict";
const removeSpacesOnString = (str) => {
    let strWithOutSpaces = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] != ' ') {
            strWithOutSpaces += str[i];
        }
    }
    return strWithOutSpaces;
};
const test = 'Hola mundo sin espacios ni saltos de linea';
console.log(removeSpacesOnString(test));
