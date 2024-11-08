isPal = (str) => {
    str = str.toLowerCase().replace(/\s/g, '');
    size = str.length;
    for (i = 0; i < Math.floor(size/2); i++) {
        if (str[i] != str[(size - 1) - i]) {
            return false;
        }
    }
    return true;
}

/* const word = 'Anita lava la tina';
console.log(isPal(word));
let result = isPal("aSdsA");
console.log(result); */