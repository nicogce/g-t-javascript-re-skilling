import { capitalizeWords } from "./03_capitalize_words.helper";

const strTest: string = 'esto es una prueba de mayusculas';
const strResult: string = 'Esto Es Una Prueba De Mayusculas';
describe('capitalize the first letter of each word in a text', () => {

    test('Valid case 1', () => {
        expect(capitalizeWords(strTest)).toEqual(strResult);
    });
});