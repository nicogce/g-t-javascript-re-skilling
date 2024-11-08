function isPalindrome(word) {
    try {
        if (typeof word != 'string' ) {
            throw new Error("The variable 'word' most be a String");        
        }
        word = word.toLowerCase();
        word = word.replace(/\s/g, '')
        const wordSize = word.length;
        for (let i = 0; i < Math.floor(wordSize/2); i++) {
            const element = word[i];
            //console.log(`Primera parte: ${word[i]} - Segunda parte: ${word[(wordSize - 1) - i]}`);
            if (word[i] != word[(wordSize - 1) - i]) {
                return false;
            }
        }

        return true;
    } catch (error) {
        console.log(`Error: ${error.message}`)
    }
}

const word = 'Anita lava la tina';
console.log(isPalindrome(word));
let result = isPalindrome("aSdsA");
console.log(result);