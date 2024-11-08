function factorial(num) {
    try {
        if (typeof num != 'number' || !Number.isInteger(num)) {
            throw new Error("The variable 'num' most be a integer number");        
        }

        let factorialNum = 1;
        for (let i = 0; i < num; i++) {
            factorialNum = factorialNum * (i + 1);
        }

        return factorialNum;
    } catch (error) {
        console.log(`Error: ${error.message}`)
    }
}

const num = 7;
console.log(factorial(num));