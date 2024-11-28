import { filterPositiveNumbers } from "./helpers/01_filter_positive_numbers.helper";
import { symmetricDifferenceNumbers } from "./helpers/02_inverse_symmetric_difference_array.helper";
import { capitalizeWords } from "./helpers/03_capitalize_words.helper";

const numsTest: number[] = [-12, 0, 2, -31, -9, 3, 123];
const positiveNumbers: number[] = filterPositiveNumbers(numsTest);
console.log(positiveNumbers);


const numsTest2: number[] = [-12, 117, 2, -312, -9, 33, 123];
const differenceNumbers: number[] = symmetricDifferenceNumbers(numsTest, numsTest2);
console.log(differenceNumbers);

const str = "esto es una prueba de mayusculas";
const finalSentence = capitalizeWords(str);
console.log(finalSentence);
