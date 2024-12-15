import { absoluteNumber } from '../../lib/utils';

describe('Testing absoluteNumber function', () => {
    test('-2 should return 2', () => {
        expect(absoluteNumber(-2)).toBe(2);
    });

    test('2 should return 2', () => {
        expect(absoluteNumber(2)).toBe(2);
    });
});
