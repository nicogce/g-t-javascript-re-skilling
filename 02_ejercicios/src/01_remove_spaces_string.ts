const removeSpacesOnString = (str: string) => {
    let strWithOutSpaces: string = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] != ' ') {
            strWithOutSpaces += str[i];
        }
    }

    return strWithOutSpaces;
};

const test: string = 'Hola mundo sin espacios ni saltos de linea';
console.log(removeSpacesOnString(test));