import { filterPositiveNumbers } from "./01_filter_positive_numbers.helper";

const valid = [-12, 0, 2, -31, -9, 3, 123];
const expectResult = [0, 2, 3, 123];

const valid2 = [-1, -2, -4, -500];
const expectResult2:number [] = [];
const invalid = ["asd", 1, -4, "test"];

describe('filter the positive number on an numbered array', () => {

    test('Valid array 1', () => {
        expect(filterPositiveNumbers(valid)).toEqual(expectResult);
    });

    test('Valid array 2', () => {
        expect(filterPositiveNumbers(valid2)).toEqual(expectResult2);
    });
});