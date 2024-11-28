import { symmetricDifferenceNumbers } from "./02_inverse_symmetric_difference_array.helper";

const valid = [-12, 0, 2, -31, -9, 3, 123];
const valid2 = [-12, 117, 2, -312, -9, 33, 123];
const expectResult = [ 117, -312, 33 ];

describe('filter the symmetric difference between two numeric arrays', () => {

    test('Valid case 1', () => {
        expect(symmetricDifferenceNumbers(valid, valid2)).toEqual(expectResult);
    });
});