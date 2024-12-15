import { isNegative } from '../../lib/utils';

describe('Test isNegative function', () => {
    test('-2 should return true', () => {
        expect(isNegative(-2)).toBe(true);
    });

    test('2 should return true', () => {
        expect(isNegative(2)).toBe(false);
    });
});
